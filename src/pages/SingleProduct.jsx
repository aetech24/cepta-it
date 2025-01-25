import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward} from 'react-icons/io';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';
import products from '/src/constants/products';

const SingleProduct = () => {
  const { state } = useLocation(); // Get product details from state
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('details'); // Tab state

  // Redirect to the shop page if no product is provided
  if (!state || !state.product) {
    navigate('/shop');
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

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-auto rounded-lg shadow mb-4">
            <img
              src={product.image}
              alt={product.Name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex gap-2 justify-center">
            {product.additionalImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">
            {product.Name}
          </h1>
          <p className="text-gray-600 mt-2 mb-4">{product.description}</p>
          <p className="text-[#EF0303] text-2xl font-bold mb-4">
            GH₵{product.price}
          </p>

          <div className="mb-4">
            <p className="text-sm text-gray-500">
              ⭐ {product.rating} ({product.reviewsCount} customer reviews)
            </p>
          </div>

          <div className="flex gap-4 items-center mb-6">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="border border-gray-300 rounded p-2 w-16"
            />
            <button
              onClick={() => addToCart(product)}
              className="bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-6 py-2 rounded flex items-center gap-2"
            >
              Add to Cart
            </button>
            <button
              className="border border-gray-400 text-gray-600 px-6 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
            >
              ❤️
            </button>
          </div>

          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <p className="flex items-center gap-2">
              🚚 Free Delivery
            </p>
            <p className="flex items-center gap-2">
              🔄 Return Policy
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
