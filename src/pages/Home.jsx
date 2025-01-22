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
  const displayProducts = products.filter(product => product.type === category);

  return (
    <main className='min-h-screen py-8 w-[100%] mx-auto'>
      <div className='flex flex-col'>
      <div className='w-full h-[512px] bg-black flex flex-row justify-between items-center px-36 pt-24'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-white text-sm'>The All New</p>
          <h2 className='text-white text-4xl font-bold text-wrap h-[132px] gap-2 tracking-wide leading-10'>
            Apple <br />
            <br />
            iPhone 15 Pro Max
          </h2>
          <button onClick={() => navigate('/shop')} className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'>
            Shop Now
          </button>
        </div>
        <div>
          <img
            src={heroBanner}
            alt='hero-banner'
            className='bg-black pt-7 sm:w-[452.96px] sm:h-[390px] mt-7 max-sm:w-[247px] max-sm:h-[228px]'
          ></img>
        </div>
      </div>
      <div className='w-[100%] flex flex-col'>
          <div className='flex flex-row flex-wrap justify-between items-center justify-self-center pt-24 mx-auto w-[100%] px-14'>
            <div className=''>
              <h4 className='text-black text-2xl font-[400] text-start relative'>
                Trending Products
                <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl'></span>
              </h4>
            </div>{' '}
            <button onClick={() => navigate('/shop')} className='bg-none border-[1.4px] border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300'>
              View All
            </button>
          </div>
          <div className='grid grid-cols-4 gap-8 pt-24 mx-auto w-[100%] px-14'>
            {trendingProducts.map((product) => (
              <div key={product.id} className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
                <h2 className='text-lg font-semibold mb-2'>{product.Name}</h2>
                <p className='text-red-500 font-bold'>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      <div className='flex flex-row bg-[#E6EAF5] w-[1240px] h-[451px] max-sm:w-[100%] justify-self-center justify-between mx-auto mt-10 px-36'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-[#0E0F0F] text-sm'>Apple Deals</p>
          <h2 className='text-[#0E0F0F] text-4xl font-bold text-wrap h-[132px] gap-2 tracking-wide leading-10'>
            Flat $10 <br />
            <br /> Over All iPhones
          </h2>
          <button onClick={() => navigate('/shop')} className='bg-[#EF0303] text-white px-4 py-2 hover:bg-[#00278C] transition-all duration-300'>
            Shop Now
          </button>
        </div>
        <div className='mt-[61px]'>
          <img src={heroBanner} alt='hero-banner' className=''></img>
        </div>
      </div>
      <div className='w-[100%] flex flex-col'>
        <div className='flex flex-row justify-between items-center justify-self-center pt-24 mx-auto w-[1240px]'>
          <h4 className='text-black text-2xl font-[400] text-start relative'>
            Categories
            <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl'></span>
          </h4>
        </div>{' '}
        <div className='flex flex-row col-6 justify-between items-center w-[100%] mx-auto px-14 pt-24 gap-5 max-sm:overflow-x-scroll max-sm:overflow-y-hidden'>
          <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'>
            <SlScreenSmartphone className='text-black font-light w-[56px] h-[56px] group-hover:text-white' />
            <p className='text-black font-light group-hover:text-white'>
              Smartphones
            </p>
          </div>
          <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'>
            <HiOutlineComputerDesktop className='text-black font-light w-[56px] h-[56px] group-hover:text-white' />
            <p className='text-black font-light group-hover:text-white'>
              Computers
            </p>
          </div>
          <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'>
            <BsSmartwatch className='text-black font-light w-[56px] h-[56px] group-hover:text-white' />
            <p className='text-black font-light group-hover:text-white'>
              Smartwatches
            </p>
          </div>
          <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'>
            <AiOutlineCamera className='text-black font-light w-[56px] h-[56px] group-hover:text-white' />
            <p className='text-black font-light group-hover:text-white'>
              Cameras
            </p>
          </div>
          <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'>
            <CiHeadphones className='text-black font-light w-[56px] h-[56px] group-hover:text-white' />
            <p className='text-black font-light group-hover:text-white'>
              Headphones
            </p>
          </div>
          <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'>
            <LuGamepad className='text-black font-light w-[56px] h-[56px] group-hover:text-white' />
            <p className='text-black font-light group-hover:text-white'>
              Gaming
            </p>
          </div>
        </div>
        <div className='w-[100%] flex flex-col'>
          <div className='flex flex-row justify-between items-center justify-self-center pt-24 mx-auto w-[100%] px-14'>
            <div className=''>
              <h4 className='text-black text-2xl font-[400] text-start relative'>
                New Arrivals
                <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl'></span>
              </h4>
            </div>{' '}
            <button onClick={() => navigate('/shop')} className='bg-none border-[1.4px] border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300'>
              View All
            </button>
          </div>
          <div className='grid grid-cols-4 gap-8 pt-24 mx-auto w-[100%] px-14'>
            {newProducts.map((product) => (
              <div key={product.id} className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
                <h2 className='text-lg font-semibold mb-2'>{product.Name}</h2>
                <p className='text-red-500 font-bold'>${product.price}</p>
              </div>
            ))}
          </div>
          {/* <ProductGrid
            products={newProducts}
            className='grid grid-cols-1 sm:grid-cols-4 gap-8 px-4 pt-10 mx-auto max-w-[100%]'
          /> */}
        </div>
        <div className='flex justify-between items-center pt-24 mx-auto mb-10 w-[100%] h-[600px] px-14 gap-6'>
          {/* Left Banner */}
          <div className='bg-black h-full w-1/2 relative'>
            <div className='flex flex-col justify-center items-start gap-4 absolute bottom-[20px] left-[20px] p-8 z-10'>
              <h2 className='text-white text-4xl font-bold text-wrap gap-2 tracking-wide leading-10'>
                New Products
              </h2>
              <p className='text-white text-sm'>
                New Products coming out on sale
              </p>
              <button onClick={() => navigate('/shop')} className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'>
                Shop Now
              </button>
            </div>
            <img
              src={leftBanner}
              alt='left-banner'
              className='w-[511px] h-[500px] object-cover'
            />
          </div>

          {/* Right Banners */}
          <div className='flex flex-col w-1/2 h-full gap-4'>
            {/* Top Right Banner */}
            <div className='bg-black h-1/2 relative'>
              <div className='flex flex-col justify-end items-start gap-4 absolute bottom-0 left-0 p-8 z-10'>
                <h2 className='text-white text-4xl font-bold text-wrap gap-2 tracking-wide leading-10'>
                  Featured Products
                </h2>
                <p className='text-white text-sm'>
                  Featured Products that give you another vibe
                </p>
                <button onClick={() => navigate('/shop')} className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'>
                  Shop Now
                </button>
              </div>
              <img
                src={rightTopBanner}
                alt='right-top-banner'
                className='w-[214px] h-[220px] object-cover absolute right-[20px] top-[20px]'
              />
            </div>

            {/* Bottom Right Banner */}
            <div className='bg-black h-1/2 relative'>
              <div className='flex flex-col justify-end items-start gap-4 absolute bottom-0 left-0 p-8 z-10'>
                <h2 className='text-white text-4xl font-bold text-wrap gap-2 tracking-wide leading-10'>
                  Top Products
                </h2>
                <p className='text-white text-sm'>
                  Browse our top products categories
                </p>
                <button onClick={() => navigate('/shop')} className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'>
                  Shop Now
                </button>
              </div>
              <img
                src={rightBottomBanner}
                alt='right-bottom-banner'
                className='w-[300px] h-[200px] object-cover absolute right-[20px] bottom-[20px]'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center mx-auto w-[100%] h-[344px] my-auto px-14 gap-10  bg-[#FDE6E6]'>
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
        <div className='w-[100%] flex flex-col pb-5 mx-auto'>
          <div className='flex flex-row justify-between items-center pt-24 mx-auto w-[100%] px-14'>
            <div className='flex flex-row gap-8 justify-center items-center mx-auto'>
              <Link onClick={() => setCategory('featured')} className={`cursor-pointer text-gray-500 hover:text-black transition-all duration-300 group ${category === 'featured' ? 'text-black' : ''}`}>
                <h4 className='text-2xl font-[400] text-start relative'>
                  Featured Products
                  <span className={`h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl ${category === 'featured' ? 'block text-black' : 'hidden group-hover:block'}`}></span>
                </h4>
              </Link>
              <Link onClick={() => setCategory('top')} className={`cursor-pointer text-gray-500 hover:text-black transition-all duration-300 group ${category === 'top' ? 'text-black' : ''}`}>
                <h4 className='text-2xl font-[400] text-start relative'>
                  Top Products
                  <span className={`h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl ${category === 'top' ? 'block text-black' : 'hidden group-hover:block'}`}></span>
                </h4>
              </Link>
              <Link onClick={() => setCategory('top-selling')} className={`cursor-pointer text-gray-500 hover:text-black transition-all duration-300 group ${category === 'top-selling' ? 'text-black' : ''}`}>
                <h4 className='text-2xl font-[400] text-start relative'>
                  Top Selling Products
                  <span className={`h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl ${category === 'top-selling' ? 'block text-black' : 'hidden group-hover:block'}`}></span>
                </h4>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-8 pt-24 mx-auto w-[100%] px-14'>
            {displayProducts.map((product) => (
              <div key={product.id} className='flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
                <h2 className='text-lg font-semibold mb-2'>{product.Name}</h2>
                <p className='text-red-500 font-bold'>${product.price}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
