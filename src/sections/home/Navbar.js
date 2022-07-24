import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="navbar">
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
