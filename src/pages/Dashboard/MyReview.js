import React from "react";

const MyReview = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const ratting = e.target.ratting.value;
    const review = { name, comment, ratting };
    console.log(review);
  };

  return (
    <div className="card-body bg-white my-10 rounded-2xl w-2/4">
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
          <input type="text" className="input input-bordered" name="comment" />
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Place Your Review</button>
        </div>
      </form>
    </div>
  );
};

export default MyReview;