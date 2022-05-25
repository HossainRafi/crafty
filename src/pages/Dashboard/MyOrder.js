import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Order from "./Order";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Buy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Order key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
