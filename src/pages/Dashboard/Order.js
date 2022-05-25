import React from "react";

const Order = ({ order }) => {
  const { userName, name, quantity } = order;
  return (
    <tr>
      <th>1</th>
      <td className="text-center">{userName}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">
        <button class="btn btn-xs bg-green-600 border-0 text-white">Buy</button>
      </td>
      <td className="text-center">
        <button class="btn btn-xs border-0 bg-red-500 text-white">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Order;
