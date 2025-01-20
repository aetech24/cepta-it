import React from 'react';
import heroBanner from '../assets/iphone 2.png';
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";




const Home = () => {
  return (
    <main className='min-h-screen py-8 w-[100%] mx-auto'>
      <div className='w-full h-[512px] bg-black flex flex-row justify-between items-center px-36 pt-24'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-white text-sm'>The All New</p>
          <h2 className='text-white text-4xl font-bold text-wrap h-[132px] gap-2 tracking-wide leading-10'>
            Apple <br /><br />iPhone 15 Pro Max
          </h2>
          <button className='bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 text-white px-4 py-2'>
            Shop Now
          </button>
        </div>
        <div>
          <img
            src={heroBanner}
            alt='hero-banner'
            className='bg-black pt-7 sm:w-[247px] sm:h-[228px]'
          ></img>
        </div>
      </div>
      <div className='w-[100%] flex flex-col'>
      <div className='flex flex-row justify-between items-center justify-self-center pt-24 mx-auto w-[100%] px-14'>
        <div className=''>
          <h4 className='text-black text-2xl font-[400] text-start relative'>
            Trending Products
            <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl'></span>
          </h4>
        </div>{' '}
        <button className='bg-none border-[1.4px] border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300'>
          View All
        </button>
      </div>
      <div className='flex flex-row flex-wrap justify-between items-center min-w-[380px] max-w-[100%] mx-auto pt-24 gap-5 px-14'>
        <div className='w-[293px] h-[354px] bg-black'></div>
        <div className='w-[293px] h-[354px] bg-black'></div>
        <div className='w-[293px] h-[354px] bg-black'></div>
        <div className='w-[293px] h-[354px] bg-black'></div>
      </div>
      </div>
      <div className='flex flex-row bg-[#E6EAF5] w-[1240px] h-[451px] max-sm:w-[100%] justify-self-center justify-between mx-auto mt-10 px-36'>
      <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-[#0E0F0F] text-sm'>Apple Deals</p>
          <h2 className='text-[#0E0F0F] text-4xl font-bold text-wrap h-[132px] gap-2 tracking-wide leading-10'>
            Flat $10 <br />
            <br /> Over All iPhones
          </h2>
          <button className='bg-[#EF0303] text-white px-4 py-2 hover:bg-[#00278C] transition-all duration-300'>
            Shop Now
          </button>
        </div>
        <div className='mt-[61px]'>
          <img
            src={heroBanner}
            alt='hero-banner'
            className=''
          ></img>
        </div>
      </div>
      <div>
      <div className='flex flex-row justify-between items-center justify-self-center pt-24 mx-auto w-[1240px]'>
          <h4 className='text-black text-2xl font-[400] text-start relative'>
            Categories
            <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-1/2 absolute top-full left-0 mt-1 font-[2px] drop-shadow-xl'></span>
          </h4>
        </div>{' '}
        <div className='flex flex-row col-6 justify-between items-center w-[100%] mx-auto pt-24 gap-5 max-sm:overflow-x-scroll max-sm:overflow-y-hidden'>
            <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'><SlScreenSmartphone className='text-black font-light w-[56px] h-[56px] group-hover:text-white' /><p className='text-black font-light group-hover:text-white'>Smartphones</p></div>
            <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'><HiOutlineComputerDesktop className='text-black font-light w-[56px] h-[56px] group-hover:text-white' /><p className='text-black font-light group-hover:text-white'>Computers</p></div>
            <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'><BsSmartwatch className='text-black font-light w-[56px] h-[56px] group-hover:text-white' /><p className='text-black font-light group-hover:text-white'>Smartwatches</p></div>
            <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'><AiOutlineCamera className='text-black font-light w-[56px] h-[56px] group-hover:text-white' /><p className='text-black font-light group-hover:text-white'>Cameras</p></div>
            <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'><CiHeadphones className='text-black font-light w-[56px] h-[56px] group-hover:text-white' /><p className='text-black font-light group-hover:text-white'>Headphones</p></div>
            <div className='w-[170px] h-[145px] bg-none max-sm:w-[170px] rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center hover:bg-black group hover:text-white transition-all duration-300 gap-3'><LuGamepad className='text-black font-light w-[56px] h-[56px] group-hover:text-white' /><p className='text-black font-light group-hover:text-white'>Gaming</p></div>
        </div>
      </div>
        </main> 
  );
};

export default Home;
