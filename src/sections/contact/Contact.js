import React from "react";

import tattooMachine from "../../assets/icons/tattoo-machine-96.png";
import location from "../../assets/icons/location-90.png";
import phone from "../../assets/icons/phone-100.png";
import mail from "../../assets/icons/mail-90.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="info">
          <h2>CONTACT</h2>
          <h3>FIND OUT HOW TO REACH OUT & GET HERE</h3>
          <p>Feel free to ask any questions regarding our work</p>
        </div>
        <div className="contact-info">
          <div className="contact-info-detail">
            <img src={tattooMachine} />
            <p>Danny Mendez</p>
          </div>
          <div className="contact-info-detail">
            <img src={location} />
            <p>655 S Orca St, Seattle, Washington, 98108</p>
          </div>
          <div className="contact-info-detail">
            <img src={phone} />
            <p>+1 (425) 245-9998</p>
          </div>
          <div className="contact-info-detail">
            <img src={mail} />
            <p>evaloso@yahoo.com</p>
          </div>
        </div>
        <div className="directions">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="250"
                height="250"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=655%20S%20Orcas%20St,%20Seattle,%20WA%2098108,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=655+S+Orca+St+Seattle+WA+98108"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
