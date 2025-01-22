import React from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalValue } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6 lg:p-12 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          to="/shop"
          className="bg-[#EF0303] hover:bg-[#00278C] text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span>Home &gt; Categories &gt; Cart</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold relative pb-2 mb-4">
          Cart
          <span className="absolute left-0 bottom-0 w-10 h-1 bg-red-600 rounded"></span>
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Check your items and proceed to provide your payment information.
        </p>
        
{/* Cart Items */}
<div className="bg-white shadow-md rounded-lg overflow-hidden">
  {cart.map((item) => (
    <div
      key={item.id}
      className="grid grid-cols-6 items-center p-4 border-b last:border-none"
    >
      {/* Item Image */}
      <div className="col-span-1">
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name || "product"}
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>

      {/* Item Details */}
      <div className="col-span-2 flex items-center justify-between space-x-4">
        <h2 className="font-medium truncate">
          {item.Name && item.Name.trim() ? item.Name : "Unnamed Item"}
        </h2>
        <p className="text-gray-500">GH₵{parseFloat(item.price) || 0}</p>
      </div>

      {/* Quantity Control */}
      <div className="col-span-1 flex items-center justify-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className={`px-2 py-1 rounded-md border border-gray-300 transition-all duration-300 ${
            item.quantity > 1
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-100 cursor-not-allowed"
          }`}
        >
          <FiMinus />
        </button>
        <span className="font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Increase Quantity"
          className="px-2 py-1 bg-gray-200 rounded-md border border-gray-300 hover:bg-gray-300 transition-all duration-300"
        >
          <FiPlus />
        </button>
      </div>

      {/* Total Price */}
      <div className="col-span-1 text-center">
        <p className="font-medium">
          GH₵{(parseFloat(item.price) * item.quantity || 0).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <div className="col-span-1 text-center">
        <button
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove Item"
          className="text-red-500 hover:text-red-700 transition-all duration-300"
        >
          <FiX />
        </button>
      </div>
    </div>
  ))}
</div>
        

        {/* Order Summary */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 lg:w-1/3 ml-auto">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>GH₵{totalValue.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>GH₵{totalValue.toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-500 text-white font-medium py-2 mt-4 rounded-md hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
