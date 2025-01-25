import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";

const ProductGrid = ({ products, addToCart, viewProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[#FAFAFA] w-full"
        >
          <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.Name}
              className="w-full h-full object-contain bg-[#E6EAF5] p-4 transition-transform duration-300 hover:scale-105"
              onClick={()=> viewProduct(product)}
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button 
                className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-[#EF0303] hover:text-white transition-all duration-300 group"
                aria-label="Add to wishlist"
              >
                <FaHeart className="text-lg text-[#00278c] group-hover:text-white transition duration-300" />
              </button>
              <button
                onClick={() => addToCart(product)}
                className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-[#00278c] hover:text-white transition-all duration-300 group"
                aria-label="Add to cart"
              >
                <FaShoppingCart className="text-lg text-[#00278c] group-hover:text-white transition duration-300" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-base sm:text-lg truncate mb-1" title={product.Name}>{product.Name}</h3>
            <p className="text-[#EF0303] font-semibold text-lg sm:text-xl">${parseFloat(product.price).toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-sm">{product.rating}</span>
              <span className="ml-2 text-gray-400 text-sm">({product.reviewsCount} customer reviews)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  viewProduct: PropTypes.func,
};

export default ProductGrid;