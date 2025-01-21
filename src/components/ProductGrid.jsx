import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-14 pt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative rounded shadow-sm hover:shadow-lg bg-[#FAFAFA] w-[295px]"
        >
          <div className="relative h-56 overflow-hidden rounded-t bg-gray-100">
            <img
              src={product.image}
              alt={product.Name}
              className="w-full h-full object-contain bg-[#E6EAF5] p-4"
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button className="p-2 bg-transparent rounded-full shadow hover:shadow-md hover:text-[#EF0303] transition">
                <FaHeart className="text-lg text-[#00278c] hover:text-[#EF0303] transition duration-300" />
              </button>
              <button className="p-2 bg-transparent rounded-full shadow hover:shadow-md hover:text-[#00278c] transition duration-300">
                <FaShoppingCart className="text-lg text-[#00278c] hover:text-[#EF0303] transition duration-300" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg truncate">{product.Name}</h3>
            <p className="text-red-500 font-semibold">${product.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-sm">★★★★★</span>
              <span className="ml-2 text-gray-400 text-sm">(88)</span>
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
      image: PropTypes.any.isRequired,
    })
  ).isRequired,
};

export default ProductGrid;