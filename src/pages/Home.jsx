import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroBanner from '../assets/iphone 2.png';
import { SlScreenSmartphone } from 'react-icons/sl';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { BsSmartwatch } from 'react-icons/bs';
import { AiOutlineCamera } from 'react-icons/ai';
import { CiHeadphones } from 'react-icons/ci';
import { LuGamepad } from 'react-icons/lu';
// import ProductGrid from '../components/ProductGrid';
import products from '../constants/products';
import leftBanner from '../assets/ps5-banner.png';
import rightTopBanner from '../assets/laptop-banner.png';
import rightBottomBanner from '../assets/jbl-banner.png';
import {
  PiTruck,
  PiHandCoinsThin,
  PiHeadset,
  PiShieldCheck,
} from 'react-icons/pi';

const trendingProducts = products.filter(
  (product) => product.type === 'trending'
);
const newProducts = products.filter((product) => product.type === 'new');
// const featuredProducts = products.filter((product) => product.type === 'featured');
// const topProducts = products.filter((product) => product.type === 'top');
// const topSellingProducts = products.filter((product) => product.type === 'top-selling');

const Home = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('featured');
  const displayProducts = products.filter(
    (product) => product.type === category
  );

  //const handleViewProduct = (product) => {
    //navigate(`/product/${product.id}`, { state: { product } });
  //};

  return (
    <main className='min-h-screen py-8 w-full mx-auto'>
      <div className='flex flex-col'>
        {/* Hero Section */}
        <div className='w-full bg-black px-4 md:px-36 pt-12 md:pt-24'>
          <div className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-start gap-4 text-center md:text-left w-full md:w-auto md:mb-6'>
              <p className='text-white text-sm'>The All New</p>
              <h2 className='text-white text-3xl md:text-4xl font-bold tracking-wide leading-10 mb-4 md:mb-0'>
                Apple <br />
                iPhone 15 Pro Max
              </h2>
              <button
                onClick={() => navigate('/singleproduct')}
                className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2 w-full md:w-auto'
              >
                Shop Now
              </button>
            </div>
            <div className='mt-8 md:mt-0'>
              <img
                src={heroBanner}
                alt='hero-banner'
                className='w-full max-w-[300px] md:max-w-[452.96px] h-auto mx-auto md:mb-0 md:mt-10'
              />
            </div>
          </div>
        </div>

        {/* Trending Products Section */}
        <div className='w-full flex flex-col px-4 md:px-14'>
          <div className='flex flex-row md:flex-row justify-between items-center pt-12 md:pt-24 gap-4 md:gap-2'>
            <div>
              <h4 className='text-black lg:text-2xl text-sm font-[400] text-center md:text-start relative'>
                Trending Products
                <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 md:left-0 translate-x-0 md:translate-x-0 mt-1'></span>
              </h4>
            </div>
            <button
              onClick={() => navigate('/shop')}
              className='bg-none border-[1.4px] border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 lg:w-[124px] lg:h-[48px] w-[100px] h-[40px]'
            >
              View All
            </button>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-12 md:pt-24'>
            {trendingProducts.map((product) => (
              <div
                
                key={product.id}
                onClick={()=> navigate(`/product/${product.id}`,{
                  state: {product},
                }

                )}
                className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow'
              >
                <img
                  src={product.image}
                  alt={product.Name}
                  
                  className='w-full h-48 object-contain mb-4 cursor-pointer'
                />
                <h2 className='text-lg font-semibold mb-2 text-center'>
                  {product.Name}
                </h2>
                <p className='text-red-500 font-bold'>${product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apple Deals Section */}
        <div className='bg-[#E6EAF5] mt-10 px-4 md:px-36'>
          <div className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-auto pt-12 md:pt-24'>
            <div className='flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left md:mb-4'>
              <p className='text-[#0E0F0F] text-sm'>Apple Deals</p>
              <h2 className='text-[#0E0F0F] text-3xl md:text-4xl font-bold tracking-wide leading-10 mb-4 md:mb-0'>
                Flat $10 <br /> Over All iPhones
              </h2>
              <button
                onClick={() => navigate('/shop')}
                className='bg-[#EF0303] text-white px-4 py-2 hover:bg-[#00278C] transition-all duration-300 w-full md:w-auto'
              >
                Shop Now
              </button>
            </div>
            <div className='mt-8 md:mt-0'>
              <img
                src={heroBanner}
                alt='hero-banner'
                className='w-full max-w-[300px] md:max-w-none h-auto mx-auto'
              />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className='w-full px-4 md:px-14 mt-12'>
          <h4 className='text-black text-2xl font-[400] text-center md:text-start relative mb-12'>
            Categories
            <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-1 md:w-[10%]'></span>
          </h4>
          <div className='flex flex-row md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0'>
            {[
              {
                icon: <SlScreenSmartphone className='w-[56px] h-[56px]' />,
                name: 'Smartphones',
              },
              {
                icon: (
                  <HiOutlineComputerDesktop className='w-[56px] h-[56px]' />
                ),
                name: 'Computers',
              },
              {
                icon: <BsSmartwatch className='w-[56px] h-[56px]' />,
                name: 'Smartwatches',
              },
              {
                icon: <AiOutlineCamera className='w-[56px] h-[56px]' />,
                name: 'Cameras',
              },
              {
                icon: <CiHeadphones className='w-[56px] h-[56px]' />,
                name: 'Headphones',
              },
              {
                icon: <LuGamepad className='w-[56px] h-[56px]' />,
                name: 'Gaming',
              },
            ].map((category, index) => (
              <div
                key={index}
                className='min-w-[170px] h-[145px] bg-none rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'
              >
                <div className='text-black font-light w-[56px] h-[56px] group-hover:text-white'>
                  {category.icon}
                </div>
                <p className='text-black font-light group-hover:text-white'>
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className='w-full flex flex-col px-4 md:px-14 mt-12'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
            <div>
              <h4 className='text-black text-2xl font-[400] text-center md:text-start relative'>
                New Arrivals
                <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-1'></span>
              </h4>
            </div>
            <button
              onClick={() => navigate('/shop')}
              className='bg-none border-[1.4px] border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300'
            >
              View All
            </button>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-12'>
            {newProducts.map((product) => (
              <div
                key={product.id}
                className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow'
              >
                <div  
                key={product.id} 
                onClick={()=>navigate(`/product/${product.id}`, {
                  state: {product}
                }

                )}>
                  
                  <img
                    src={product.image}
                    alt={product.Name}
                    className='w-full h-48 object-contain mb-4 cursor-pointer'
                  />
                  <h2 className='text-lg font-semibold mb-2 text-center'>
                    {product.Name}
                  </h2>
                  <p className='text-red-500 font-bold'>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Section */}
        <div className='flex flex-col lg:flex-row gap-6 pt-12 md:pt-24 px-4 md:px-14 mb-10'>
          {/* Left Banner */}
          <div className='bg-black w-full lg:w-1/2 relative min-h-[300px] lg:h-[600px]'>
            <div className='flex flex-col justify-center items-start gap-4 absolute bottom-[20px] left-[20px] p-8 z-10'>
              <h2 className='text-white text-2xl md:text-4xl font-bold tracking-wide leading-tight'>
                New Products
              </h2>
              <p className='text-white text-sm'>
                New Products coming out on sale
              </p>
              <button
                onClick={() => navigate('/shop')}
                className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'
              >
                Shop Now
              </button>
            </div>
            <img
              src={leftBanner}
              alt='PS5 Banner'
              className='absolute top-0 right-0 h-full w-auto object-cover'
            />
          </div>

          {/* Right Banners */}
          <div className='flex flex-col gap-6 w-full lg:w-1/2'>
            {/* Top Right Banner */}
            <div className='bg-[#E6EAF5] relative min-h-[250px] lg:h-[290px]'>
              <div className='flex flex-col justify-end items-start gap-4 absolute bottom-0 left-0 p-8 z-10'>
                <h2 className='text-[#0E0F0F] text-2xl md:text-4xl font-bold tracking-wide leading-tight'>
                  Featured Products
                </h2>
                <p className='text-[#0E0F0F] text-sm'>
                  Featured Products that give you another vibe
                </p>
                <button
                  onClick={() => navigate('/shop')}
                  className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'
                >
                  Shop Now
                </button>
              </div>
              <img
                src={rightTopBanner}
                alt='right-top-banner'
                onClick={()=>navigate(`/product/${product.id}`,{
                  state: {product}
                }

                )}
                className='w-[150px] top-5 max-w-[300px] md:max-w-none h-auto mx-auto absolute right-0 md:w-[200px]'
              />
            </div>

            {/* Bottom Right Banner */}
            <div className='bg-black relative min-h-[250px] lg:h-[290px]'>
              <div className='flex flex-col justify-end items-start gap-4 absolute bottom-0 left-0 p-8 z-10'>
                <h2 className='text-white text-2xl md:text-4xl font-bold tracking-wide leading-tight'>
                  Top Products
                </h2>
                <p className='text-white text-sm'>
                  Browse our top products categories
                </p>
                <button
                  onClick={() => navigate('/shop')}
                  className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'
                >
                  Shop Now
                </button>
              </div>
              <img
                src={rightBottomBanner}
                alt='right-bottom-banner'
                onClick={()=>navigate(`/product/${product.id}`,{
                  state: {product}
                }

                )}
                className='w-[170px] top-12 max-w-[300px] cursor-pointer md:max-w-none h-auto mx-auto absolute bottom-2 right-0 md:w-[250px]'
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-14 py-12 bg-[#E6EAF5]'>
          <div className='flex flex-row items-center gap-4'>
            <PiTruck className='text-[#EF0303] w-[56px] h-[56px]' />
            <div>
              <p>Free Delivery</p>
              <span>For Orders Over $100</span>
            </div>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <PiHandCoinsThin className='text-[#EF0303] w-[56px] h-[56px]' />
            <div>
              <p>Money Back Guarantee</p>
              <span>Full refund guaranteed</span>
            </div>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <PiHeadset className='text-[#EF0303] w-[56px] h-[56px]' />
            <div>
              <p>24/7 Support</p>
              <span>We are always here for you</span>
            </div>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <PiShieldCheck className='text-[#EF0303] w-[56px] h-[56px]' />
            <div>
              <p>Secure Payment</p>
              <span>100% secure payment</span>
            </div>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className='w-full flex flex-col pb-5 mx-auto'>
          <div className='flex flex-row justify-between items-center pt-24 mx-auto w-[100%] px-14'>
            <div className='flex flex-row gap-8 justify-center items-center mx-auto'>
              <Link
                onClick={() => setCategory('featured')}
                className={`cursor-pointer text-gray-500 hover:text-black transition-all duration-300 group ${
                  category === 'featured' ? 'text-black' : ''
                }`}
              >
                <h4
                  className={`lg:text-2xl md:text-2xl text-lg font-[400] text-start relative ${
                    category === 'featured' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Featured Products
                  <span
                    className={`h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl ${
                      category === 'featured'
                        ? 'block text-black'
                        : 'hidden group-hover:block'
                    }`}
                  ></span>
                </h4>
              </Link>
              <Link
                onClick={() => setCategory('top')}
                className={` cursor-pointer text-gray-500 hover:text-black transition-all duration-300 group ${
                  category === 'top' ? 'text-black' : ''
                }`}
              >
                <h4
                  className={`lg:text-2xl md:text-2xl text-lg font-[400] text-start relative ${
                    category === 'top' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Top Products
                  <span
                    className={`h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl ${
                      category === 'top'
                        ? 'block text-black'
                        : 'hidden group-hover:block'
                    }`}
                  ></span>
                </h4>
              </Link>
              <Link
                onClick={() => setCategory('top-selling')}
                className={`cursor-pointer text-gray-500 hover:text-black transition-all duration-300 group ${
                  category === 'top-selling' ? 'text-black' : ''
                }`}
              >
                <h4
                  className={`lg:text-2xl md:text-2xl text-lg font-[400] text-start relative ${
                    category === 'top-selling' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Top Selling Products
                  <span
                    className={`h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl ${
                      category === 'top-selling'
                        ? 'block text-black'
                        : 'hidden group-hover:block'
                    }`}
                  ></span>
                </h4>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-24 mx-auto w-[100%] px-14'>
            {displayProducts.map((product) => (
              <div
                key={product.id}
                className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow'
              >
                <img
                  src={product.image}
                  alt={product.Name}
                  className='w-full h-48 object-contain mb-4'
                />
                <h2 className='text-lg font-semibold mb-2'>{product.Name}</h2>
                <p className='text-[#EF0303] font-bold'>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
