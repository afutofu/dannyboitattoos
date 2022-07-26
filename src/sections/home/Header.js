import React from "react";
import InstagramIcon from "./InstagramIcon";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <InstagramIcon />
        <h1 id="title">DannyBoiTattoos</h1>
        <h2>Tel: +1 (425) 245-9998</h2>
      </div>
    </header>
  );
};

export default Header;
