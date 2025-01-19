import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import products from "/src/constants/products";

const Shop = () => {
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(""); // Category filter
  const itemsPerPage = 6;

  // Filter products based on brand, price, and category
  const filterProducts = () => {
    return products.filter((product) => {
      const matchBrand = brandFilter
        ? product.Name.toLowerCase().includes(brandFilter.toLowerCase())
        : true;
      const matchPrice =
        priceFilter === "under150"
          ? product.price <= 150
          : priceFilter === "150to500"
          ? product.price > 150 && product.price <= 500
          : true;
      const matchCategory = category ? product.category === category : true;
      return matchBrand && matchPrice && matchCategory;
    });
  };

  // Pagination logic
  const paginatedProducts = filterProducts().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination
  const totalPages = Math.ceil(filterProducts().length / itemsPerPage);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-gray-100">
        <h2 className="font-bold text-lg mb-4">Filter</h2>
        <div className="mb-6">
          <h3 className="font-medium mb-2">Brand</h3>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="brand"
                value="Dell"
                className="mr-2"
                onChange={(e) => setBrandFilter(e.target.value)}
              />
              Dell
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="brand"
                value="Samsung"
                className="mr-2"
                onChange={(e) => setBrandFilter(e.target.value)}
              />
              Samsung
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="brand"
                value="HP"
                className="mr-2"
                onChange={(e) => setBrandFilter(e.target.value)}
              />
              HP
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="brand"
                value=""
                className="mr-2"
                onChange={() => setBrandFilter("")}
              />
              All Brands
            </label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-medium mb-2">Pricing</h3>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="price"
                value="under150"
                className="mr-2"
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              Under $150
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="price"
                value="150to500"
                className="mr-2"
                onChange={(e) => setPriceFilter(e.target.value)}
              />
              $150 to $500
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="price"
                value=""
                className="mr-2"
                onChange={() => setPriceFilter("")}
              />
              All Prices
            </label>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <select
              className="border p-2 rounded"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
            </select>
            <select
              className="border p-2 rounded"
              onChange={(e) => console.log("Sorting not implemented yet")}
            >
              <option value="best-match">Best Matches</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <p className="text-gray-500">
            Showing {paginatedProducts.length} of {filterProducts().length}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded shadow-sm hover:shadow-lg transition relative"
            >
              <div className="relative h-56 overflow-hidden rounded-t bg-gray-100">
                <img
                  src={product.image}
                  alt={product.Name}
                  className="w-full h-full object-contain bg-white p-4"
                />
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="p-2 bg-transparent rounded-full shadow hover:shadow-md hover:text-red-500 transition">
                  <FaHeart className="text-lg text-gray-500" />
                </button>
                <button className="p-2 bg-transparent rounded-full shadow hover:shadow-md hover:text-green-500 transition">
                  <FaShoppingCart className="text-lg text-gray-500" />
                </button>
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
        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            className="px-4 py-2 border rounded hover:bg-gray-200"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 border rounded hover:bg-gray-200"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Shop;
