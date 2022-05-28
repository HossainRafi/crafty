import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-50 font-bold font-serif text-gray-700 bg-base-100">
          <li className="py-1">
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li className="py-1">
            <Link to="/dashboard/myorder">My Order</Link>
          </li>
          <li className="py-1">
            <Link to="/dashboard/myreview">My Review</Link>
          </li>
          <li className="py-1">
            <Link to="/dashboard/additem">Add Item</Link>
          </li>
          <li className="py-1">
            <Link to="/dashboard/allitem">All Item</Link>
          </li>
          <li className="py-1">
            <Link to="/dashboard/allorder">All Order</Link>
          </li>
          <li className="py-1">
            <Link to="/dashboard/makeadmin">Make Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
