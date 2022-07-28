import React from "react";

import dbt1 from "../../assets/images/dbt1.jpg";

import Header from "./Header";
import Navbar from "./Navbar";
import BookButton from "../../components/BookButton";

const Home = () => {
  return (
    <section id="home">
      <img className="background-image" src={dbt1} />
      <Header />
      <Navbar />
      <div className="book-info">
        <div className="text">
          <p>655 S Orca St</p>
          <p>Seattle, Washington 98108</p>
        </div>
        <BookButton>Book</BookButton>
      </div>
    </section>
  );
};

export default Home;
