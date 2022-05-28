import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Order = ({ order, index }) => {
  const { userName, name, quantity } = order;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure To Delete Your Order ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
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
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{userName}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{quantity}</td>
      {/* ============ */}
      <td>
        {order.price && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs bg-green-600 text-white">Pay</button>
          </Link>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction id:{" "}
              <span className="text-success">{order.transactionId}</span>
            </p>
          </div>
        )}
      </td>
      {/* ======== */}
      <td className="text-center">
        <button
          onClick={() => handleDelete(order._id)}
          className="btn btn-xs border-0 bg-red-600 text-white text-center"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Order;
