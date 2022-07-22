import React from "react";

import icon from "../../assets/icons/instagram-90.png";

const InstagramIcon = () => {
  return (
    <div className="instagram-icon">
      <a
        href="https://www.instagram.com/dannyboimendez88/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} />
      </a>
    </div>
  );
};

export default InstagramIcon;
