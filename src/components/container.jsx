import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Ikincitur from "./ikincitur";

const container = () => {
  const countDownDate = new Date("May 14,2023 08:00:00").getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  setInterval(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, 1000);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <>
      <div className="container">
        <div className="sayac">
          <label htmlFor="day">{days}</label>
          <label className="yazi" htmlFor="day">
            GÜN
          </label>
          <label htmlFor="hours"> {hours}</label>
          <label className="yazi" htmlFor="day">
            SAAT
          </label>
          <label htmlFor="hours"></label>
          <label htmlFor="minute"> {minutes}</label>
          <label className="yazi" htmlFor="day">
            DAKİKA
          </label>
          <label htmlFor="second"> {seconds}</label>
          <label className="yazi" htmlFor="day">
            SANİYE
          </label>
        </div>
      </div>
      <Ikincitur />
    </>
  );
};

export default container;
