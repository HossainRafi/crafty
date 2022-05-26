import React from "react";
import Swal from "sweetalert2";

const Order = ({ order }) => {
  const { userName, name, quantity } = order;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure To Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <tr>
      <th className="text-center">1</th>
      <td className="text-center">{userName}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">
        <button class="btn btn-xs bg-green-600 border-0 text-white text-center">
          Buy Now
        </button>
      </td>
      <td className="text-center">
        <button
          onClick={() => handleDelete(order._id)}
          class="btn btn-xs border-0 bg-red-500 text-white text-center"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Order;
