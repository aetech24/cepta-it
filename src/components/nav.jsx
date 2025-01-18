import { Link } from 'react-router-dom';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai';
import logo from '../assets/ceptalogo 1.jpg';

const Nav = () => {
  return (
    <nav className='w-full sticky top-0 transition-all duration-300 backdrop-blur-md bg-opacity-90'>
      <div className='w-full bg-[#00278C] p-2 text-center'>
        <p className='text-white'>Free Shipping on Orders Over $1000</p>
      </div>
      <div className='container mx-auto flex flex-wrap items-center justify-between w-[100%] h-[88px] px-10 sticky top-0 transition-all duration-300 backdrop-blur-md bg-opacity-90'>
        <Link to='/' className='text-[#232323] text-xl font-bold'>
          <img src={logo} alt='logo' className='w-[120px] h-[50px]' />
        </Link>
        <div className='flex space-x-6'>
          <Link to='/' className='text-[#232323] hover:text-blue-400'>
            Home
          </Link>
          <Link to='/shop' className='text-[#232323] hover:text-blue-400'>
            Shop
          </Link>
          <Link to='/about' className='text-[#232323] hover:text-blue-400'>
            About
          </Link>
          <Link to='/contact' className='text-[#232323] hover:text-blue-400'>
            Contact
          </Link>
        </div>
        <div className='flex items-center relative'>
          <input
            type='search'
            placeholder='Search'
            className='w-[283px] h-[40px] rounded-md p-2 pr-10 bg-[#E6EAF5] border-none focus:outline-none'
          />
          <AiOutlineSearch className='absolute right-3 text-[#232323]' />
        </div>
        <div className='flex space-x-6 items-center'>
          <Link className='text-[#232323] hover:text-blue-400 text-2xl'>
            <AiOutlineHeart />
          </Link>
          <Link className='text-[#232323] hover:text-blue-400 text-2xl'>
            <AiOutlineShoppingCart />
          </Link>
          <Link className='text-[#232323] hover:text-blue-400 text-2xl'>
            <AiOutlineUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
