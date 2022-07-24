import React from "react";

import dbt2 from "../../assets/images/dbt2.jpg";
import BookButton from "../../components/BookButton";

const Contact = () => {
  return (
    <section id="booking">
      <div className="white-background" />
      <div className="container">
        <div className="info-alt">
          <h2>BOOKING</h2>
          <h3>OPEN HOURS & APPOINTMENTS</h3>
          <p>Schedule an appointment here to see available times</p>
        </div>
        <div className="schedule">
          <div>
            <p>
              <span>Monday</span> 12:00 pm - 10:00 pm
            </p>
            <p>
              <span>Tuesday</span> 12:00 pm - 10:00 pm
            </p>
            <p>
              <span>Wednesday</span> 12:00 pm - 10:00 pm
            </p>
            <p>
              <span>Thursday</span> 12:00 pm - 10:00 pm
            </p>
            <p>
              <span>Friday</span> 12:00 pm - 8:00 pm
            </p>
            <p>
              <span>Saturday</span> 12:00 pm - 8:00 pm
            </p>
            <p>
              <span>Sunday</span> 2:00 pm - 8:00 pm
            </p>
          </div>
          <img src={dbt2} />
        </div>
        <BookButton alt={true}>Book</BookButton>
      </div>
    </section>
  );
};

export default Contact;
