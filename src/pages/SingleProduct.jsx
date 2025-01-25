import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';
import products from '/src/constants/products';
import { PiTruck } from 'react-icons/pi';
import { FiRefreshCcw } from 'react-icons/fi';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa';

const SingleProduct = () => {
  const { state } = useLocation(); // Get product details from state
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('details'); // Tab state

   // Redirect to the shop page if no product is provided
   useEffect(() => {
    if (!state || !state.product) {
      navigate('/shop');
    }
  }, [state, navigate]);

  // If no product exists, don't render anything until redirection happens
  if (!state || !state.product) {
    return null;
  }
  const { product } = state; // Destructure product details

  // Get related products 
  const relatedProducts = products.filter(
    (item) => item.cat === product.cat && item.id !== product.id
  );

  return (
    <main className="min-h-screen py-8 px-4 md:px-10">
      {/* Breadcrumb */}
      <div className="flex flex-row items-center gap-2 mb-6 md:mb-10 overflow-x-auto whitespace-nowrap">
        <p
          className="text-black text-sm cursor-pointer"
          onClick={() => navigate('/shop')}
        >
          Shop
        </p>
        <IoIosArrowForward className="text-black text-sm flex-shrink-0" />
        <p className="text-[#EF0303] text-sm">{product.Name}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
  {/* Product Image Section */}
  <div className="w-full lg:w-1/2">
    {/* Main Image */}
    <div className="w-full h-auto rounded-lg shadow mb-4">
      <img
        src={product.image}
        alt={product.Name}
        className="w-full h-auto rounded-lg"
      />
    </div>
    {/* Thumbnail Images with Arrows */}
    <div className="flex items-center gap-4 justify-center">
      {/* Left Arrow */}
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <IoIosArrowBack className="w-6 h-6 text-gray-600" />
      </button>
      {/* Thumbnails */}
      {product.additionalImages?.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Additional ${index}`}
          className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-gray-400"
        />
      ))}
      {/* Right Arrow */}
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <IoIosArrowForward className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  </div>

  {/* Product Details Section */}
  <div className="w-full lg:w-1/2">
    {/* Product Name */}
    <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
      {product.Name}
    </h1>
    {/* Reviews */}
    <p className="text-gray-600 text-sm mb-4">
       {product.rating} ({product.reviewsCount} customer reviews)
    </p>
    {/* Price */}
    <p className="text-[#EF0303] text-3xl font-bold mb-4">
      GH₵{product.price}
    </p>
    {/* Lines around the description */}
    <div className="border-t border-b border-gray-300 py-4 my-4">
      <p className="text-gray-700 leading-6">
        {product.description}
      </p>
    </div>
    {/* Add to Cart & Actions */}
    <div className="flex items-center gap-4 mb-6">
      <input
        type="number"
        min="1"
        defaultValue="1"
        className="border border-gray-300 rounded p-2 w-16"
      />
      <button
        onClick={() => addToCart(product)}
        className="bg-[#EF0303] hover:bg-[#00278C] text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
      >
        Add to Cart
      </button>
      {/*  Heart Icon */}
      <button className="flex items-center justify-center bg-[#EF0303] w-10 h-10 rounded-full border border-gray-300 hover:bg-[#00278C]">
        <FaHeart className="text-white w-5 h-5" />
      </button>
      {/* Styled Share Icon */}
      <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100">
        <IoShareSocialOutline className="text-gray-600 w-5 h-5" />
      </button>
    </div>
    {/* Additional Details */}
    <div className="flex items-center gap-8 text-gray-600 text-sm">
      {/* Free Delivery */}
      <p className="flex items-center gap-3">
        <PiTruck className="w-6 h-6" />
        <span>
          <strong>Free Delivery</strong>
          <br />
          For orders over $150.00
        </span>
      </p>
      {/* Return Policy */}
      <p className="flex items-center gap-3">
        <FiRefreshCcw className="w-6 h-6" />
        <span>
          <strong>Return Policy</strong>
          <br />
          Product eligible for return policy
        </span>
      </p>
    </div>
  </div>
</div>
      {/* Additional Info (Tabs) */}
      <div className="mt-10">
        <div className="border-b border-gray-300 mb-4">
          <ul className="flex gap-6 text-gray-600">
            <li
              className={`cursor-pointer pb-2 ${
                activeTab === 'details'
                  ? 'border-b-2 border-[#EF0303] text-black'
                  : 'hover:text-black'
              }`}
              onClick={() => setActiveTab('details')}
            >
              Product Details
            </li>
            <li
              className={`cursor-pointer pb-2 ${
                activeTab === 'specs'
                  ? 'border-b-2 border-[#EF0303] text-black'
                  : 'hover:text-black'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Specification
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 'details' ? (
            <p className="text-gray-600">
              {product.details ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            </p>
          ) : (
            <ul className="list-disc list-inside text-gray-600">
              {product.specifications?.map((spec, index) => (
                <li key={index}>{spec}</li>
              )) || (
                <p>No specifications available for this product.</p>
              )}
            </ul>
          )}
        </div>
      </div>
      {/* Related Products */}
      <div className="mt-12 justify-center align-center">
        <h2 className="text-lg font-semibold relative pb-2 mb-4 text-center">Related Products
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#EF0303]"></span>
        </h2>
        
        <ProductGrid products={relatedProducts} addToCart={addToCart} />
      </div>
    </main>
  
  );
};

export default SingleProduct;
