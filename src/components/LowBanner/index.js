import React from "react";
import "./style.scss";
import background from "../../images/lowbanner.jpeg";
import Logo from "../Logo";
import { BsArrowRight } from "react-icons/bs";

export const LowBanner = () => {
  return (
    <div
      className="low-banner--container "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hstack gap-3 left">
        <Logo alt className="logo" />
        <BsArrowRight />
        <span>Search result for</span>

        <div className="searcher">3D</div>
      </div>
    </div>
  );
};
