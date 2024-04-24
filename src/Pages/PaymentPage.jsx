import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { id } = useParams();
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  function setPayment() {
    sessionStorage.setItem("payment", paymentMethod);
  }
  return (
    <div
      className="bg-gray-100 h-full pt-8"
      style={{ height: "calc(100vh - 68px)" }}
    >
      <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Payment Details</h1>
        <form className="bg-gray-100 p-4 rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Payment Method:
            </label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => handlePaymentMethodChange("upi")}
                className="mr-2"
              />
              <label
                htmlFor="upi"
                className="text-sm text-gray-700 cursor-pointer"
              >
                UPI ID
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => handlePaymentMethodChange("cod")}
                className="mr-2"
              />
              <label
                htmlFor="cod"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Cash on Delivery
              </label>
            </div>
          </div>
          <NavLink
            onClick={setPayment}
            to={`/order/${id}`}
            type="submit"
            className="bg-green hover:bg-darkGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Pay Now
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Payment;
