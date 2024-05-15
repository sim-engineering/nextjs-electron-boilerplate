import React, { useState, useEffect } from "react";
import {
  FaHourglassStart,
  FaHourglassHalf,
  FaHourglassEnd,
} from "react-icons/fa";

const NavigationIcon = () => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon + 1) % 3);
    }, 333);

    return () => clearInterval(interval);
  }, []);

  const icons = [
    <FaHourglassStart
      key="nav-start"
      style={{ color: "darkorange" }}
      className="text-4xl"
    />,
    <FaHourglassHalf
      key="nav-half"
      style={{ color: "darkorange" }}
      className="text-4xl"
    />,
    <FaHourglassEnd
      key="nav-end"
      style={{ color: "darkorange" }}
      className="text-4xl"
    />,
  ];

  return <div>{icons[currentIcon]}</div>;
};

export default NavigationIcon;
