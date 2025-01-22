import React from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useCart(); 

  // Update quantity
  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle empty cart scenario
  if (cart.length === 0) {
    return (
      <div className="p-6 lg:p-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-4">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <a
            href="/shop"
            className=" bg-[#EF0303] hover:bg-[#00278C] text-[#ffffff] font-medium py-2 px-4 transition-all duration-300"
          >
            Continue Shopping
          </a>
        </div>
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
              className="flex items-center justify-between p-4 border-b last:border-none"
            >
              {/* Item Details */}
              <div className="flex items-center space-x-4 gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                </div>
                <div>
                  <p className="text-gray-500">GH₵{item.price}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  <FiMinus />
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  <FiPlus />
                </button>
              </div>

              {/* Total Price */}
              <p className="font-medium">
                GH₵{(item.price * item.quantity).toFixed(2)}
              </p>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 lg:w-1/3 ml-auto">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>GH₵{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>GH₵{subtotal.toFixed(2)}</span>
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