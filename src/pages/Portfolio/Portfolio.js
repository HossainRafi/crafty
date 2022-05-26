import React from "react";
import img from "../../utilities/me.jpg";

const Portfolio = () => {
  return (
    <div>
      <div class="min-h-[90vh] py-10">
        <div class="md:flex lg:flex-row-reverse">
          <div class="avatar md:w-2/6 flex justify-center items-center px-10">
            <div class="w-70 rounded-full">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center md:w-4/6 px-10">
            <div>
              <p className="text-2xl font-serif font-bold">
                Muhammed Muazzam Hossain
              </p>
              <p className="text-xl font-serif md:pl-20 py-1">
                Full Stack Web Developer
              </p>
              <p className="text-lg font-serif font-semibold pt-5">
                Email:{" "}
                <span className="font-mono font-normal">
                  hossainrafi71@gmail.com
                </span>
              </p>
              <p className="text-lg font-serif font-semibold py-1">
                Education:{" "}
                <span className="font-mono font-normal">
                  Bs.C in Computer Science & Engineering
                </span>
              </p>
              <p className="text-lg font-serif font-semibold">
                Technologies:{" "}
                <span className="font-mono font-normal">
                  React, React Router, JavaScript, Node.js, Express.js, MongoDB,
                  Firebase, Tailwind CSS, Bootstrap, React Bootstrap, React Hook
                  Form, Heroku, Firebase Hosting, Stripe, payment Gateway,
                  Netlify, Git & Github
                </span>
              </p>
              <div className="text-lg font-serif font-semibold pt-2">
                My Projects:{" "}
                <span className="font-mono font-normal">
                  <a
                    className="text-blue-600"
                    target={"_blank"}
                    href="https://assignment-10-8d187.web.app/"
                    rel="noreferrer"
                  >
                    Capture Freaks,{" "}
                  </a>
                </span>
                <span className="font-mono font-normal">
                  <a
                    className="text-blue-600"
                    target={"_blank"}
                    href="https://warehouse-8c8c8.web.app/"
                    rel="noreferrer"
                  >
                    Warehouse,{" "}
                  </a>
                </span>
                <span className="font-mono font-normal">
                  <a
                    className="text-blue-600"
                    target={"_blank"}
                    href="https://warehouse-8c8c8.web.app/"
                    rel="noreferrer"
                  >
                    Crafty
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
