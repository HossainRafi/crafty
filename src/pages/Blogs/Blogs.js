import React from "react";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 py-10 px-10">
      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
          How To Improve The Performance Of A React Application?
        </h2>
        <p className="text-lg">
          1. By Using Immutable Data Structures <br />
          2. By Using Function/Stateless Components and React.PureComponent
          <br />
          3. By Using Production Mode Flag in Webpack
          <br />
          4. Dependency optimization
          <br />
          5. By Using React.Fragments to Avoid Additional HTML Element Wrappers
          <br />
          6. Avoid using Index as Key for map
          <br />
          7. Avoiding Props in Initial States
        </p>
      </div>

      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-lg text-justify"></p>
      </div>

      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
          How does prototypical inheritance work?
        </h2>
        <p className="text-lg text-justify">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object.getPrototypeOf and Object.
        </p>
      </div>

      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
          Why we do not set the state directly in React?
        </h2>
        <p className="text-lg text-justify"></p>
      </div>

      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-lg text-justify"></p>
      </div>

      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-serif font-bold text-red-600 mb-4">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-lg text-justify"></p>
      </div>
    </div>
  );
};

export default Blogs;
