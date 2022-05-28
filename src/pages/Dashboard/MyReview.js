import React, { useState } from "react";
import Swal from "sweetalert2";

const MyReview = () => {
  const [rattingError, setRattingError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const ratting = e.target.ratting.value;
    if (ratting < 0 || ratting > 5) {
      return setRattingError("Retting Will Be Between 0 to 5 ");
    }
    setRattingError("");
    const review = { name, comment, ratting };
    console.log(review);

    fetch("https://desolate-waters-73882.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-5">
      <h1 className="text-center pb-5 font-serif font-bold text-3xl text-blue-500">
        Add A Review
      </h1>
      <div className="card-body bg-white mx-auto rounded-2xl w-2/4">
        <form onSubmit={handleForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-serif font-bold">Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-serif font-bold">Comment</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              name="comment"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-serif font-bold">Ratting</span>
            </label>
            <input
              type="number"
              name="ratting"
              className="input input-bordered"
            />
          </div>
          {rattingError && (
            <p className="text-red-500 text-center">{rattingError}</p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Place Your Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyReview;
