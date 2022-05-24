import React from "react";
import AccessApp from "./AccessApp";
import Banner from "./Banner";
import Products from "./Products";
import Summary from "./Summary";
import Tutorial from "./Tutorial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Summary />
      <Tutorial />
      <AccessApp />
    </div>
  );
};

export default Home;
