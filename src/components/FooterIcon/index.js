import React from "react";
import "./style.scss";

const FooterIcon = ({ children, ...props }) => {
  return (
    <span className="footer--icon" {...props}>
      {children}
    </span>
  );
};

export default FooterIcon;
