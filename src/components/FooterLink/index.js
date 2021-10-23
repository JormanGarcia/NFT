import React from "react";
import "./style.scss";

const FooterLink = ({ children, ...props }) => {
  return (
    <div class="mb-3">
      <a className="footer--link" {...props}>
        {children}
      </a>
    </div>
  );
};

export default FooterLink;
