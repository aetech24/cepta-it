import React from "react";
import { FaCreditCard, FaUser } from "react-icons/fa"; 
import Headset from "../assets/headphone-white.png";
import Gamepad from "../assets/gamepad.png";
import Camera from "../assets/camera.png";
import VisaLogo from "../assets/visa.png";

const Checkout = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <span>Home &gt; Categories &gt; Headset &gt; Cart &gt; </span>
        <span className="text-red-600 font-medium">Checkout</span>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Products Section */}
        <div className="space-y-6">
          {/* Your Products Header */}
          <div>
            <h2 className="text-lg font-semibold relative pb-2">
              Your Products
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-sm text-gray-600">
              Check your items and proceed to provide your <br />
              payment information
            </p>
          </div>

          {/* Products List */}
          <div className="space-y-4">
            {[{
              name: "Vray Park - VR Park",
              price: 1200,
              quantity: 2,
              image: Headset,
            }, {
              name: "HAVIT HV-G92 Gamepad",
              price: 1200,
              quantity: 2,
              image: Gamepad,
            }, {
              name: "Canon DSLR Camera",
              price: 1200,
              quantity: 2,
              image: Camera,
            }].map((product, index) => (
              <div
                key={index}
                className="flex items-center border-b border-gray-200 pb-4 last:border-b-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500">Qty: {product.quantity} Pcs</p>
                </div>
                <p className="font-medium text-gray-800">GH₵{product.price}</p>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-gray-300 p-4 sm:p-6">
            <h3 className="text-md font-semibold pb-2">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>GH₵3600.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                <span>Total</span>
                <span>GH₵3600.00</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-red-600 text-white font-semibold py-3 hover:bg-red-700 transition">
              Pay GH₵3600.00
            </button>
          </div>
        </div>

        {/* Contact and Payment Details Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold relative pb-2">
              Contact Details
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-red-600 rounded"></span>
            </h2>
            <p className="text-sm text-gray-600">
              Complete your order by providing the rest of <br />
              your details.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 p-2 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Shipping Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 outline-none"
                  placeholder="Enter your address"
                />
              </div>
            </form>
          </div>

          {/* Payment Details */}
          <div className="bg-white p-4 sm:p-6">
            <h3 className="text-md font-semibold pb-2">Payment Details</h3>
            <p className="text-sm text-gray-600">
              Complete your payment by providing <br />
              your payment details.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-black-700 mt-7 font-semibold mb-1">Card Details</label>
                <div className="flex items-center space-x-2">
                  <FaCreditCard className="w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 p-2 outline-none"
                    placeholder="MM/YY"
                  />
                  <FaCreditCard className="w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 p-2 outline-none"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-black-700 mb-1 font-semibold">Card Holder</label>
                <div className="flex items-center">
                  <FaUser className="w-5 h-5 text-gray-600 mr-2" />
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 outline-none"
                    placeholder="Enter cardholder's name"
                  />
                </div>
              </div>
            </form>

            {/* Payment Methods */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Payment Methods</h4>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment-method" className="mr-2" />
                  Bank
                  <img src={VisaLogo} alt="Visa" className="h-6 ml-2" />
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment-method" className="mr-2" />
                  MoMo
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment-method" className="mr-2" />
                  Cash on delivery
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
