import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Header.scss";
import Dropdown from "../Dropdown/Dropdown.js";
import { fetchLocationOptions } from "./requests.js";
import { updateSearchParam, updateCountryCode } from "../../actions";
import { locations } from "../../general/staticDropdownOptions.js";
import useGoToJobsPage from "../../hooks/useGoToJobsPage";
import JobSearchForm from "../JobSearchForm";

const Header = () => {
  const dispatch = useDispatch();

  const jobInputRef = useRef();

  const companyInputRef = useRef();

  const locationInputRef = useRef();

  const [showDropdownFor, setShowDropdownFor] = useState(null);

  const [locationChoices, setLocationChoices] = useState(locations);

  const [locationValue, setLocationValue] = useState("");

  const [debouncedLocationValue, setDebouncedLocationValue] = useState("");

  const goToJobsPage = useGoToJobsPage();

  const searchParams = useSelector((state) => {
    return state.searchParams;
  });

  //adds event listener on our body that closes all Dropdown components when user
  //clicks outside of them
  useEffect(() => {
    const closeDropdownsOutsideClick = (e) => {
      const refs = [jobInputRef, companyInputRef, locationInputRef];

      const closeDropdown = refs.every((ref) => {
        return ref.current && !ref.current.contains(e.target);
      });

      if (closeDropdown) {
        setShowDropdownFor(null);
      }
    };

    document.body.addEventListener("click", closeDropdownsOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeDropdownsOutsideClick);
    };
  }, []);

  //sets debouncedLocationValue after a certain time passes without user typing a
  //character in order to avoid too many requests.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLocationValue(locationValue);
    }, 600);

    return () => {
      clearInterval(timerId);
    };
  }, [locationValue]);

  //fetches suggested location options based on user's debouncedLocationValue
  useEffect(() => {
    const getLocationOptions = async () => {
      const result = await fetchLocationOptions(debouncedLocationValue);
      setLocationChoices(result);
    };

    if (debouncedLocationValue) {
      getLocationOptions();
    }
  }, [debouncedLocationValue]);

  //when we click search get an encoded url and go to the url below which will open
  //up JobsPage component
  const onSearchSubmit = (e) => {
    e.preventDefault();

    goToJobsPage(searchParams, 1);
  };

  //renders dropdown component for our job type, company and location
  const renderDropdown = (paramName, dropTitle, dropItems) => {
    if (paramName === showDropdownFor) {
      return (
        <Dropdown
          title={dropTitle}
          items={dropItems}
          onItemClick={(e, paramValue) => {
            dispatch(updateSearchParam(paramName, paramValue));
            setShowDropdownFor(null);
            e.stopPropagation();
          }}
        />
      );
    }
  };

  return (
    <header className="Header">
      <div className="container Header__container">
        <h1
          className="logo"
          onClick={() => {
            goToJobsPage(
              {
                country: "us",
                what: "",
                company: "",
                where: "",
                salary_min: "",
                salary_max: "",
                full_time: "",
                part_time: "",
              },
              1
            );
          }}
        >
          <span className="bold">Eazy-E</span> Postings
        </h1>
        <JobSearchForm />
      </div>
    </header>
  );
};

export default Header;
