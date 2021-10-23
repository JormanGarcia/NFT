import React from "react";
import "./style.scss";

export const Category = ({ children, active }) => {
  return <div className={`category ${active ? "active" : ""}`}>{children}</div>;
};
