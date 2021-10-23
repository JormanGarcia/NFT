import React from "react";
import "./style.scss";

const FooterGroup = ({ title, children }) => {
  return (
    <div className="gap-4 footer--group">
      {title && <h6 class="footer-group--title mb-4">{title}</h6>}
      <div className="footer--groups-links">{children}</div>
    </div>
  );
};

export default FooterGroup;
