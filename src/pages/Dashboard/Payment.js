import React from "react";
import { useParams } from "react-router-dom";
// import { useQuery } from "react-query";
// import Loading from "./../Shared/Loading";
const Payment = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Payment;
