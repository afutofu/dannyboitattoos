import React from "react";

import dbt1 from "../../assets/images/dbt1.jpg";

import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section id="home">
      <img className="background-image" src={dbt1} />
      <Header />
      <Navbar />
      <div></div>
    </section>
  );
};

export default Home;
