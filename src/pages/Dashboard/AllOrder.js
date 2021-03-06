import React, { useEffect, useState } from "react";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://desolate-waters-73882.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div className="p-5">
      <h1 className="text-center pb-5 font-serif font-bold text-3xl text-blue-500">
        All Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">Order Quantity</th>
              <th className="text-center">Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th className="text-center">{index + 1}</th>
                <td className="text-center">{order.userName}</td>
                <td className="text-center">{order.name}</td>
                <td className="text-center">{order.quantity}</td>
                <td className="text-center">
                  <button className="text-center">Pending</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
