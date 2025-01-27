import { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';


const Shop = () => {
  const navigate = useNavigate();
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
      const productPrice = parseFloat(product.price);
      const matchPrice =
        priceFilter === 'under150'
          ? productPrice <= 150
          : priceFilter === '150to500'
          ? productPrice > 150 && productPrice <= 500
          : true;
      const matchCategory = category ? product.cat === category : true;
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

  // Navigate to the product details
  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`);
  };

  // Add to cart functionality
  //const addToCart = (product) => {
    //setCart((prevCart) => [...prevCart, product]);
    //alert(`${product.Name} has been added to the cart!`);
  //};

  return (
    <main className='min-h-screen py-8 w-full px-4 md:px-10'>
      {/* Breadcrumb */}
      <div className='flex flex-row items-center gap-2 mb-6 md:mb-10 overflow-x-auto whitespace-nowrap'>
        <p className='text-black text-sm'>Home</p>
        <IoIosArrowForward className='text-black text-sm flex-shrink-0' />
        <p className='text-[#EF0303] text-sm'>Shop</p>
        {category && (
          <>
            <IoIosArrowForward className='text-black text-sm flex-shrink-0' />
            <p className='text-[black] text-sm'>{category}</p>
          </>
        )}
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Filter Button for Mobile */}
        <button className='lg:hidden w-full bg-black text-white py-2 px-4 rounded flex items-center justify-center gap-2'>
          <GiSettingsKnobs className='rotate-90' />
          Filter Products
        </button>

        {/* Sidebar */}
        <aside className='w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-sm'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-black text-xl md:text-2xl font-[400] relative'>
              Filter
              <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[22%] absolute top-full left-0 mt-1'></span>
            </h2>
          </div>

          <div className='space-y-6'>
            {/* Brand Filter */}
            <div>
              <h3 className='font-medium mb-3 text-[#1b2b41]'>Brand</h3>
              <div className='space-y-2'>
                {['Dell', 'Samsung', 'HP'].map((brand) => (
                  <label key={brand} className='flex items-center cursor-pointer hover:text-[#EF0303] transition-colors'>
                    <input
                      type='radio'
                      name='brand'
                      value={brand}
                      className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none cursor-pointer'
                      onChange={(e) => setBrandFilter(e.target.value)}
                    />
                    {brand}
                  </label>
                ))}
                <label className='flex items-center cursor-pointer hover:text-[#EF0303] transition-colors'>
                  <input
                    type='radio'
                    name='brand'
                    value=''
                    className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none cursor-pointer'
                    onChange={() => setBrandFilter('')}
                  />
                  All Brands
                </label>
              </div>
            </div>

            <div className='h-[2px] bg-[#E6EAF5] w-1/2'></div>

            {/* Price Filter */}
            <div>
              <h3 className='font-medium mb-3 text-[#1b2b41]'>Pricing</h3>
              <div className='space-y-2'>
                <label className='flex items-center cursor-pointer hover:text-[#EF0303] transition-colors'>
                  <input
                    type='radio'
                    name='price'
                    value='under150'
                    className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none cursor-pointer'
                    onChange={(e) => setPriceFilter(e.target.value)}
                  />
                  Under $150
                </label>
                <label className='flex items-center cursor-pointer hover:text-[#EF0303] transition-colors'>
                  <input
                    type='radio'
                    name='price'
                    value='150to500'
                    className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none cursor-pointer'
                    onChange={(e) => setPriceFilter(e.target.value)}
                  />
                  $150 to $500
                </label>
                <label className='flex items-center cursor-pointer hover:text-[#EF0303] transition-colors'>
                  <input
                    type='radio'
                    name='price'
                    value=''
                    className='mr-2 border-none bg-[#1c375a] w-[18px] h-[18px] rounded-full outline-none cursor-pointer'
                    onChange={() => setPriceFilter('')}
                  />
                  All Prices
                </label>
              </div>
            </div>
          </div>
        </aside>
      
        {/* Main Content */}
        <main className='w-full lg:w-3/4'>
          {/* Controls Bar */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
              <div className='flex items-center border rounded p-2 gap-2 w-full sm:w-auto'>
                <GiSettingsKnobs className='text-black text-sm rotate-90 flex-shrink-0' />
                <select
                  className='w-full sm:w-auto bg-transparent focus:outline-none'
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=''>All Categories</option>
                  <option value='headphone'>Headphones</option>
                  <option value='phone'>Phones</option>
                  <option value='camera'>Cameras</option>
                  <option value='gaming'>Gaming</option>
                </select>
              </div>
              <div className='flex items-center gap-2 w-full sm:w-auto'>
                <p className='text-gray-500 whitespace-nowrap'>Sort by</p>
                <select
                  className='border rounded p-2 w-full sm:w-auto bg-transparent focus:outline-none'
                  onChange={() => console.log('Sorting not implemented yet')}
                >
                  <option value='best-match'>Best Matches</option>
                  <option value='price-low-high'>Price: Low to High</option>
                  <option value='price-high-low'>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto'>
              <p className='text-gray-500 whitespace-nowrap'>
                Showing {paginatedProducts.length} of {filterProducts().length}
              </p>
              {/* Pagination */}
              <div className='flex justify-center gap-2'>
                <button
                  className='p-2 bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white w-10 h-10 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <IoIosArrowRoundBack className='w-6 h-6' />
                </button>
                <button
                  className='p-2 bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white w-10 h-10 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <IoIosArrowRoundForward className='w-6 h-6' />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <ProductGrid 
              products={paginatedProducts} 
              viewProduct={handleViewProduct}
            />
          </div>
        </main>
      </div>
    </main>
  );
};

export default Shop;