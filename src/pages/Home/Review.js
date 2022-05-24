import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-10 pt-7 pb-14 px-10">
      {review.map((r) => (
        <div className="bg-white rounded-xl py-2">
          <h2 className="font-bold text-lg px-5 pb-2">{r.name}</h2>
          <div>
            <p className="px-5 pb-3 text-justify">{r.comment}</p>
            <div className="px-5">
              <span className="text-bold font-serif">Ratting: {r.ratting}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
