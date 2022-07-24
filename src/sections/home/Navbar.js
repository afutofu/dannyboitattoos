import { useRef, useEffect } from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  let navbar = useRef(null);

  // Make navbar hide and appear based on scrolling
  useEffect(() => {
    // Set navbar top to 0px
    // navbar.style.top = "0px";

    let lastScrollPosition = 0;
    window.addEventListener("scroll", () => {
      // Get navbar element
      const navbarDOM = document.querySelector("#navbar");

      //Get header element
      const header = document.querySelector("#header");

      // Get position of top of screen, cross browser compatible
      let topOfScreenPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      console.log(header.clientHeight);

      // Make navbar stick until roughly out of screen
      if (topOfScreenPosition < header.clientHeight) {
        navbarDOM.style.position = "relative";
        // navbarDOM.style.top = "130px";

        // Get rid of shadow once it reaches 130px from top
        if (topOfScreenPosition < 130) {
          navbarDOM.style.boxShadow = "";
        }

        // Scrolling down
      } else if (topOfScreenPosition > lastScrollPosition) {
        // Set navbar over the screen
        navbarDOM.style.top = `-${navbarDOM.clientHeight}px`;
      } else {
        // Scrolling up
        // Set navbar on screen. Add box shadow
        navbarDOM.style.position = "fixed";
        navbarDOM.style.top = "0";
        navbarDOM.style.boxShadow = "0px 2px 10px 10px rgba(0, 0, 0, 0.2)";
      }
      lastScrollPosition = topOfScreenPosition;
    });
  }, [navbar]);

  return (
    <div id="navbar" ref={(el) => (navbar = el)}>
      <div className="container">
        <Link to="home" smooth={true} duration={1000}>
          <h3>HOME</h3>
        </Link>
        <Link to="gallery" smooth={true} duration={1000}>
          <h3>GALLERY</h3>
        </Link>
        <Link to="booking" smooth={true} duration={1000}>
          <h3>BOOKING</h3>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <h3>CONTACT</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
