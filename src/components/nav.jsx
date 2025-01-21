import { Link } from 'react-router-dom';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai';
import logo from '../assets/ceptalogo 1.jpg';
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'


const Nav = () => {
  return (
    <nav className='w-full sticky top-0 transition-all duration-300 backdrop-blur-md bg-opacity-90 z-50 drop-shadow-xl'>
      <div className='w-full bg-[#00278C] p-2 text-center'>
        <p className='text-white'>Free Shipping on Orders Over $1000</p>
      </div>
      <div className='container mx-auto flex flex-wrap items-center justify-between w-[100%] h-[88px] px-10 sticky top-0 transition-all duration-300 backdrop-blur-md bg-opacity-90'>
        <Link to='/' className='text-[#232323] text-xl font-bold'>
          <img src={logo} alt='logo' className='w-[120px] h-[50px]' />
        </Link>
        <div className='flex space-x-6'>
          <Link to='/' className='text-[#232323] hover:text-blue-400 transition-all duration-300'>
            Home
          </Link>
          <Link to='/shop' className='text-[#232323] hover:text-blue-400 transition-all duration-300'>
            Shop
          </Link>
          <Link to='/about' className='text-[#232323] hover:text-blue-400 transition-all duration-300'>
            About
          </Link>
          <Link to='/contact' className='text-[#232323] hover:text-blue-400 transition-all duration-300 '>
            Contact
          </Link>
        </div>
        <div className='flex items-center relative w-[283px] h-[38px]'>
          <input
            type='search'
            placeholder='Search'
            className='w-[283px] h-[40px] p-2 pr-10 bg-[#E6EAF5] border-none focus:outline-none'
          />
          <AiOutlineSearch className='absolute right-3 text-[#232323]' />
        </div>
        <div className='flex space-x-6 items-center'>
          <Link to='/wishlist' className='text-[#232323] hover:text-blue-400 text-2xl transition-all duration-300'>
            <AiOutlineHeart />
          </Link>
          <Link to='/cart' className='text-[#232323] hover:text-blue-400 text-2xl transition-all duration-300  '>
            <AiOutlineShoppingCart />
          </Link>
          <div className="relative">
            <SignedOut>
              <div className="dropdown">
                <button className="text-[#232323] hover:text-blue-400 text-2xl transition-all duration-300">
                  <AiOutlineUser />
                </button>
                <div className="dropdown-content absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <SignInButton mode="modal">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign Up
                    </button>
                  </SignInButton>
                </div>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="dropdown">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 hover:text-blue-400 transition-all duration-300",
                      userButtonPopoverCard: "z-50"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
