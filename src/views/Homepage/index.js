import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";

const Homepage = () => {
  const dispatch = useDispatch();
  /*
  useEffect(() => {
    const getInitialValues = async () => {
      await dispatch(fetchUserLocation());
      dispatch(fetchJobData());
    };
    getInitialValues();
  }, []);
*/
  return (
    <>
      <Header />
    </>
  );
};

export default Homepage;
