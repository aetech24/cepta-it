import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full">
      <div className="w-full bg-[#00278C] p-2 text-center">
        <p className="text-white">Free Shipping on Orders Over $1000</p>
      </div>
        <div className="container mx-auto flex flex-wrap items-center justify-between w-full h-[88px]">
          <Link to="/" className="text-[#232323] text-xl font-bold">
            Store Name
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-[#232323] hover:text-blue-400">
              Home
            </Link>
            <Link to="/shop" className="text-[#232323] hover:text-blue-400">
              Shop
            </Link>
            <Link to="/about" className="text-[#232323] hover:text-blue-400">
              About
            </Link>
            <Link to="/contact" className="text-[#232323] hover:text-blue-400">
              Contact
            </Link>
            <Link to="/cart" className="text-[#232323] hover:text-blue-400">
              Cart
            </Link>
          </div>
          <div><input type="search" name="" id="" placeholder="Search" className="w-[200px] h-[40px] rounded-md p-2 bg-[#E6EAF5] border-none"></input></div>
        </div>
    </nav>
  );
};

export default Nav;
