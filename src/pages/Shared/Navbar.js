import React from "react";
import { Link } from "react-router-dom";
import logo from "../../utilities/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        {user ? (
          <button className="btn btn-outline" onClick={logout}>
            LogOut
          </button>
        ) : (
          <Link className="btn btn-outline" to="/login">
            LogIn
          </Link>
        )}
      </li>
      <li>{user?.uid ? <p>{user.displayName}</p> : ""}</li>
    </>
  );
  return (
    <div className="navbar bg-gray-300">
      <div className="navbar-start px-5">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-serif w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img className="h-[40px] w-[150px]" src={logo} alt="" />
      </div>
      <div className="navbar-center px-8 font-bold font-serif text-gray-700 hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm drawer-button lg:hidden"
        >
          Sidebar
        </label>
      </div>
    </div>
  );
};

export default Navbar;
