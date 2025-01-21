import React, { useState } from 'react';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import 'swiper/css';
import products from '/src/constants/products';
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosArrowForward,
} from 'react-icons/io';
import { GiSettingsKnobs } from 'react-icons/gi';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';

const Shop = () => {
  // const navigate = useNavigate();
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(''); // Category filter
  const { addToCart } = useCart();
  const itemsPerPage = 6;

  // Filter products based on brand, price, and category
  const filterProducts = () => {
    return products.filter((product) => {
      const matchBrand = brandFilter
        ? product.Name.toLowerCase().includes(brandFilter.toLowerCase())
        : true;
      const matchPrice =
        priceFilter === 'under150'
          ? product.price <= 150
          : priceFilter === '150to500'
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

  // const handleViewProduct = (productId) => {
  //   navigate(`/product/${productId}`);
  // };

   // Add to cart functionality
   //const addToCart = (product) => {
    //setCart((prevCart) => [...prevCart, product]);
    //alert(`${product.Name} has been added to the cart!`);
  //};

  return (
    <main className='min-h-screen py-8 w-full px-10'>
      <div className='flex flex-row items-center gap-2 mb-10'>
        <p className='text-black text-sm'>Home</p>
        <IoIosArrowForward className='text-black text-sm' />
        <p className='text-[#EF0303] text-sm'>Shop</p>
        {category && (
          <>
            <IoIosArrowForward className='text-black text-sm' />
            <p className='text-[black] text-sm'>{category}</p>
          </>
        )}
      </div>

      <div className='flex flex-col lg:flex-row'>
        {/* Sidebar */}
        <aside className='w-full lg:w-1/4 p-4 bg-white'>
          <h2 className='text-black text-2xl font-[400] text-start relative mb-6'>
            Filter
            <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[22%] absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl'></span>
          </h2>
          <div className='mb-6'>
            <h3 className='font-medium mb-2 text-[#1b2b41]'>Brand</h3>
            <div>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='brand'
                  value='Dell'
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={(e) => setBrandFilter(e.target.value)}
                />
                Dell
              </label>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='brand'
                  value='Samsung'
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={(e) => setBrandFilter(e.target.value)}
                />
                Samsung
              </label>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='brand'
                  value='HP'
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={(e) => setBrandFilter(e.target.value)}
                />
                HP
              </label>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='brand'
                  value=''
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={() => setBrandFilter('')}
                />
                All Brands
              </label>
            </div>
          </div>
          <span className='block h-[2px] bg-[#E6EAF5] hover:bg-[#00278C] transition-all duration-300 w-[50%] mb-2 font-[2px] drop-shadow-xl'></span>
          <div className='mb-6 mt-4'>
            <h3 className='font-medium mb-2 text-[#1b2b41]'>Pricing</h3>
            <div>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='price'
                  value='under150'
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={(e) => setPriceFilter(e.target.value)}
                />
                Under $150
              </label>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='price'
                  value='150to500'
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={(e) => setPriceFilter(e.target.value)}
                />
                $150 to $500
              </label>
              <label className='flex items-center mb-2'>
                <input
                  type='radio'
                  name='price'
                  value=''
                  className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none'
                  onChange={() => setPriceFilter('')}
                />
                All Prices
              </label>
            </div>
          </div>
        </aside>
      
       {/* Main Content */}
       <main className='w-full lg:w-3/4 p-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex gap-6'>
              <div className='flex items-center border p-2  gap-2'>
                <GiSettingsKnobs className='text-black text-sm rotate-90' />
                <select
                  className='rounded'
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=''>Categories</option>
                  <option value='Electronics'>Electronics</option>
                  <option value='Fashion'>Fashion</option>
                  <option value='Home'>Home</option>
                </select>
              </div>
              <div className='flex items-center gap-2'>
                <p className='text-gray-500'>Sort by</p>
                <select
                  className='border p-2 items-center'
                  onChange={() => console.log('Sorting not implemented yet')}
                >
                  <option value='best-match'>Best Matches</option>
                  <option value='price-low-high'>Price: Low to High</option>
                  <option value='price-high-low'>Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-gray-500'>
                Showing {paginatedProducts.length} of {filterProducts().length}
              </p>
              {/* Pagination */}
              <div className='flex justify-center gap-4'>
                <button
                  className='px-4 py-2 bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white w-[65px] h-[45px] flex items-center justify-center'
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <IoIosArrowRoundBack className='w-[18px] h-[15px]' />
                </button>
                <button
                  className='px-4 py-2 bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white w-[65px] h-[45px] flex items-center justify-center'
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <IoIosArrowRoundForward className='w-[18px] h-[15px]' />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid products={paginatedProducts} addToCart={addToCart} />
        </main>
      </div>
    </main>
  );
};

export default Shop;