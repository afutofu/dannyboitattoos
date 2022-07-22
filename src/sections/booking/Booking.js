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
            <p>Monday 12:00 pm - 10:00 pm</p>
            <p>Tuesday 12:00 pm - 10:00 pm</p>
            <p>Wednesday 12:00 pm - 10:00 pm</p>
            <p>Thursday 12:00 pm - 10:00 pm</p>
            <p>Friday 12:00 pm - 8:00 pm</p>
            <p>Saturday 12:00 pm - 8:00 pm</p>
            <p>Sunday 2:00 pm - 8:00 pm</p>
          </div>
          <img src={dbt2} />
        </div>
        <BookButton alt={true}>Book</BookButton>
      </div>
    </section>
  );
};

export default Contact;
