import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://desolate-waters-73882.herokuapp.com/products")
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
        const url = `https://desolate-waters-73882.herokuapp.com/item/${id}`;
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
    <div className="p-5">
      <h1 className="text-center pb-5 font-serif font-bold text-3xl text-blue-500">
        All Products
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-5 pb-5">
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
              <p className="font-bold">
                Minimum Order: {item.minquantity} Units
              </p>
              <p className="font-bold">Price: ${item.price} Per Unit</p>
            </div>
            <div className="mx-auto pb-5">
              <button
                onClick={() => handleItemDelete(item._id)}
                className="btn bg-red-500 border-0 text-white"
              >
                Delete Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
