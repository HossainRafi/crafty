import React from "react";
import img from "../../utilities/me.jpg";

const Portfolio = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-10 px-10">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Portfolio;
