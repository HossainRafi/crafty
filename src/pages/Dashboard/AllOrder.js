import React, { useEffect, useState } from "react";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div>
      all order
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>
                  <button>Pending</button>
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
