import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const ikincitur = () => {
  const countDownDate = new Date("May 28,2023 08:00:00").getTime();

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

  const [show, setShow] = React.useState(false);
  const [active, setActive] = useState(false);
  function handleClick() {
    setShow((current) => !current);
    setActive(!active);
  }
  return (
    <div className="ikincitur">
      <Button variant="outlined" onClick={handleClick} id="btn">
        {active
          ? "Gizle"
          : "Seçim İkinci Tura Kalırsa İkinci Tur Sayacı İÇİN Tıkla"}
      </Button>
      {show && (
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
      )}
    </div>
  );
};

export default ikincitur;
