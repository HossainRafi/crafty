import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        dashboard
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-40 font-bold font-serif text-gray-700 bg-base-100">
          <li className="py-2">
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li className="py-2">
            <Link to="/dashboard/myorder">My Order</Link>
          </li>
          <li className="py-2">
            <Link to="/dashboard/myreview">My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
