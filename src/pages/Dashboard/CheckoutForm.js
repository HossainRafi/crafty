import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm px-5 bg-green-600 text-white mt-10 border-0"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {/* {cartError && <p className="text-red-500">{cartError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            your transaction Id:{" "}
            <span className="text-blue-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )} */}
    </div>
  );
};

export default CheckoutForm;
