import React from "react";
import download from "../../utilities/download.jpg";
import app from "../../utilities/app.png";
import play from "../../utilities/play.png";

const AccessApp = () => {
  return (
    <div className="pb-10">
      <h1 className="text-blue-900 text-center text-4xl font-bold font-serif uppercase pt-10">
        Download Our Mobile App
      </h1>
      <img src={download} alt="" className="w-full h-[400px] pb-3" />
      <div className="flex gap-10 justify-center">
        <img src={app} alt="" className="w-[160px] h-[50px]" />
        <img src={play} alt="" className="w-[160px] h-[50px]" />
      </div>
    </div>
  );
};

export default AccessApp;
