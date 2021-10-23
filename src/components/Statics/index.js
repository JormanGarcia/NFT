import React from "react";
import "./style.scss";

const Statics = ({ number, title }) => {
  return (
    <div className="vstack static">
      <h6>{number}</h6>
      <span>{title}</span>
    </div>
  );
};

export default Statics;
