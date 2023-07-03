import React from "react";
import "../assets/style/hero.css";

const Toggle = ({ dark }) => {
  return <input className="switch" type="checkbox" checked={dark} />;
};

export default Toggle;
