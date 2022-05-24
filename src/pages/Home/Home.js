import React from 'react';
import AccessApp from './AccessApp';
import Banner from "./Banner";
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
      <div>
        <Banner />
        <Products />
        <Summary />
        <AccessApp/>
      </div>
    );
};

export default Home;