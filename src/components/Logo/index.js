import React from "react";
import "./style.scss";

const Logo = ({ alt, className }) => {
  return (
    <div class={`logo--container ${alt && "alt"} ${className}`}>
      <h3>NFT</h3>
    </div>
  );
};

export default Logo;
