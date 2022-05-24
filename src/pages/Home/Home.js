import React from "react";
import AccessApp from "./AccessApp";
import Banner from "./Banner";
import Products from "./Products";
import Review from "./Review";
import Summary from "./Summary";
import Tutorial from "./Tutorial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Summary />
      <Review />
      <Tutorial />
      <AccessApp />
    </div>
  );
};

export default Home;
