import React from "react";
import drill from "../../utilities/drill.jpg";
import mitersaw from "../../utilities/mitersaw.jpg";
import screw from "../../utilities/screw.jpg";
import saw from "../../utilities/saw.jpg";

const Tutorial = () => {
  return (
    <div>
      <h1 className="text-blue-900 text-3xl px-10 font-serif uppercase pb-5 pt-10">
        Tools Using Tutorial
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 pb-10">
        <div className="card">
          <img src={drill} alt="" className="rounded-2xl" />
          <h2 className="card-title mx-auto font-bold text-xl pl-2">
            How To Use A Drill
          </h2>
        </div>
        <div className="card">
          <img src={mitersaw} alt="" className="rounded-2xl" />
          <h2 className="card-title mx-auto font-bold text-xl pl-2">
            How To Use A Miter Saw
          </h2>
        </div>
        <div className="card">
          <img src={saw} alt="" className="rounded-2xl" />
          <h2 className="card-title mx-auto font-bold text-xl pl-2">
            How To Use A Circular Saw
          </h2>
        </div>
        <div className="card">
          <img src={screw} alt="" className="rounded-2xl" />
          <h2 className="card-title mx-auto font-bold text-xl pl-2">
            How To Remove A Screw
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
