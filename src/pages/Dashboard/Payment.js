import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  const { data: appointment, isLoading } = useQuery(["payment", id], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Payment;
