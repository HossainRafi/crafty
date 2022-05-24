import React from "react";
import download from "../../utilities/download.jpg";
import app from "../../utilities/app.png";
import play from "../../utilities/play.png";

const AccessApp = () => {
  return (
    <div className="pb-10">
      <div>
        <h2 className="text-3xl text-blue-900  font-serif pt-10 pb-2 px-5">
          Shop the Right Way With the CRAFTY APP
        </h2>
        <p className="px-5 text-justify">
          When it comes to shopping at Crafty, we want to make it as easy and
          convenient as possible. Enter the app for Crafty. Its components are
          designed to create a shopping experience you’ll enjoy — before, during
          and after your visit. Have a question about products or services? Use
          the Crafty chat option to get help at any time of day. As you peruse
          the aisles in store, use the Crafty scanner feature to determine the
          cost of products for an instant Crafty price checker whenever you need
          it. With the Crafty app, you can even sign in to your MyCrafty account
          to check on orders and purchases, see what payment methods you have
          stored, update your account profile and more. So next time you shop
          Crafty, do it right. Download our app today.
        </p>
      </div>
      <img src={download} alt="" className="w-full h-[400px] pb-3" />
      <div className="flex gap-10 justify-center">
        <img src={app} alt="" className="w-[160px] h-[50px]" />
        <img src={play} alt="" className="w-[160px] h-[50px]" />
      </div>
    </div>
  );
};

export default AccessApp;
