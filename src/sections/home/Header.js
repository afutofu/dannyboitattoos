import React from "react";
import InstagramIcon from "./InstagramIcon";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <InstagramIcon />
        <h1 id="title">DannyBoiTattoos</h1>
        <h2>Tel: +1 (425) 245-9998</h2>
      </div>
    </div>
  );
};

export default Header;
