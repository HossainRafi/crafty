import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  const handleItemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
          method: "delete",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Product has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {items.map((item) => (
        <div className="card bg-gray-100">
          <figure className="px-2 pt-5">
            <img
              src={item.img}
              alt=""
              className="rounded-xl w-[230px] h-[190px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl mx-auto font-bold">
              {item.name}
            </h2>
            <p className="text-justify">{item.desc}</p>
            <p className="font-bold">
              Available Product: {item.maxquantity} Units
            </p>
            <p className="font-bold">Minimum Order: {item.minquantity} Units</p>
            <p className="font-bold">Price: ${item.price} Per Unit</p>
          </div>
          <div className="mx-auto pb-5">
            <button
              onClick={() => handleItemDelete(item._id)}
              className="btn bg-red-500 border-0"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllItem;
