import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import "./Header.scss";
import Dropdown from "../Dropdown/Dropdown.js";
import {
  jobs,
  companies,
  locations,
} from "../../general/staticDropdownOptions.js";
import { fetchLocationOptions } from "./requests.js";
import SelectBox from "../SelectBox";
import countryCodes from "../../countryCodes.js";
import TextInput from "../formInputs/TextInput.js";
import { updateSearchParam, updateCountryCode } from "../../actions";
const Header = () => {
  const dropdownRef = useRef();
  const jobInputRef = useRef();
  const companyInputRef = useRef();
  const locationInputRef = useRef();
  const dispatch = useDispatch();

  //the input name our dropdown should show for
  const [showDropdown, setShowDropdown] = useState(null);
  const [locationChoices, setLocationChoices] = useState(locations);
  const [locationValue, setLocationValue] = useState("");
  const [debouncedLocationValue, setDebouncedLocationValue] = useState("");

  const params = useSelector((state) => {
    return state.searchParams;
  });

  //adds event listener on our body for closing dropdown component when user
  //clicks outside of it and outside of the text input that renders the dropdown
  useEffect(() => {
    const renderDropdown = (e) => {
      const refs = [jobInputRef, companyInputRef, locationInputRef];
      const closeDropdown = refs.every((ref) => {
        return ref.current && !ref.current.contains(e.target);
      });

      if (closeDropdown) {
        setShowDropdown(null);
      }
    };
    document.body.addEventListener("click", renderDropdown);

    return () => {
      document.body.removeEventListener("click", renderDropdown);
    };
  }, []);

  //sets debouncedLocationValue after a certain time passes without user typing a
  //character in order to avoid many requests.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLocationValue(locationValue);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [locationValue]);

  /*
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
*/

  //renders dropdown component
  const renderDropdown = (name, title, items) => {
    if (name === showDropdown) {
      return (
        <Dropdown
          ref={dropdownRef}
          title={title}
          items={items}
          onItemClick={(e) => {
            setShowDropdown(null);
            e.stopPropagation();
          }}
        />
      );
    }
  };

  return (
    <header className="Header">
      <div className="container">
        <h1 className="logo">
          <span className="bold">Eazy-E</span> Postings
        </h1>
      </div>

      <form
        className="form"
        action="urlofthepageontheserverthatthisformwillgoto"
        method="post"
      >
        <div
          className="form__input-group"
          onClick={() => {
            setShowDropdown("job type");
          }}
          ref={jobInputRef}
        >
          <AiOutlineSearch className="form__icon" />
          <TextInput
            className="form__input"
            name="job type"
            placeholder="All jobs"
            value={params.what}
            onChange={(e) => {
              dispatch(updateSearchParam("what", e.target.value));
            }}
          />
          {renderDropdown("job type", "Popular Job Searches", jobs)}
        </div>

        <div
          className="form__input-group"
          onClick={() => {
            setShowDropdown("company");
          }}
          ref={companyInputRef}
        >
          <FaRegBuilding className="form__icon" />
          <TextInput
            className="form__input"
            name="company"
            placeholder="All Companies"
            value={params.company}
            onChange={(e) => {
              dispatch(updateSearchParam("company", e.target.value));
            }}
          />
          {renderDropdown("company", "Popular Company Searches", companies)}
        </div>

        <div className="form__input-group">
          <SelectBox
            title="Country"
            items={countryCodes}
            onItemClick={(code) => {
              dispatch(updateCountryCode(code));
            }}
            value={params.country}
          />
        </div>

        <div
          className="form__input-group"
          onClick={() => {
            setShowDropdown("location");
          }}
          ref={locationInputRef}
        >
          <IoLocationSharp className="form__icon" />
          <TextInput
            className="form__input"
            name="location"
            placeholder="Anywhere"
            value={params.where}
            onChange={(e) => {
              setLocationValue(e.target.value);
              dispatch(updateSearchParam("where", e.target.value));
            }}
          />
          {renderDropdown(
            "location",
            "choose or search a location",
            locationChoices
          )}
        </div>

        <button className="button button--primary" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
