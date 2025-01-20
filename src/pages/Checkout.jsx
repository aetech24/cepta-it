import React from "react";
import Headset from "../assets/headphone-white.png";
import Gamepad from "../assets/gamepad.png";
import Camera from "../assets/camera.png";

const Checkout = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <span>Home &gt; Shop &gt; Cart &gt; </span>
        <span className="text-red-600 font-medium">Checkout</span>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Products Section */}
        <div className="space-y-6">
          <div className="flex flex-col justify-center items-start w-[70%] gap-4">
            <h2 className="text-lg font-semibold relative pb-2">
              Your Products
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-sm text-gray-600">
              Check your items and proceed to provide your payment information
            </p>
          </div>

          <div className="bg-white border-gray-300 p-4 sm:p-6">
            {/* Product List */}
            <div className="space-y-4">
              {[
                {
                  name: "Vray Park - VR Headset",
                  price: 1200,
                  quantity: 2,
                  image: Headset,
                },
                {
                  name: "HAVIT HV-G92 Gamepad",
                  price: 1200,
                  quantity: 2,
                  image: Gamepad,
                },
                {
                  name: "Canon DSLR Camera",
                  price: 1200,
                  quantity: 2,
                  image: Camera,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start border-b border-gray-200 pb-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {product.quantity} Pcs
                    </p>
                  </div>
                  <p className="font-medium text-gray-800 mt-2 sm:mt-0">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Payment Method */}
            <div className="space-y-2 pt-6">
              <h3 className="text-md font-semibold">Payment Method</h3>
              <div className="flex flex-row col-span-2 gap-4 justify-between pr-[40%]">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="payment-method" className="mr-2" />
                  Card
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment-method" className="mr-2" />
                  Cash on delivery
                </label>
              </div>
              <div className="flex flex-col items-start h-[28px]">
                  <img
                    src="./src/assets/visa.png"
                    alt="Visa"
                    className="h-[full] w-[42px] inline mr-2 "
                  />
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="space-y-6">
          <div className="flex flex-col justify-center items-start w-[70%] gap-4">
            <h2 className="text-lg font-semibold relative pb-2">
              Payment Details
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-[#EF0303] outline-none"></span>
            </h2>
            <p className="text-sm text-gray-600">
              Complete your payment by providing your payment details.
            </p>
          </div>

          <div className="bg-white border-gray-300 p-4 sm:p-6">
            {/* Payment Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 outline-none p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Card Details
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 outline-none p-2"
                  placeholder="Enter your card details"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Card Holder
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 outline-none p-2"
                  placeholder="Enter cardholder's name"
                />
              </div>
            </form>

            {/* Payment Summary */}
            <div className="space-y-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium">${3600.00}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Shipping Fee</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold border-t border-gray-200 pt-4">
                <span>Total</span>
                <span>${3600.00}</span>
              </div>
              <button className="w-full bg-[#EF0303] text-white font-semibold py-3 hover:bg-[#00278C] transition">
                Pay ${3600.00}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;