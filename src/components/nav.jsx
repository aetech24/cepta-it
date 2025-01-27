import { Link } from 'react-router-dom';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai';
import logo from '../assets/ceptalogo 1.jpg';
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../constants/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Nav = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlistCount } = useWishlist();

  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  // Handle real-time search as user types
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = products
        .filter((product) => {
          const term = value.toLowerCase();
          return (
            product.Name.toLowerCase().includes(term) ||
            product.type.toLowerCase().includes(term) ||
            product.cat.toLowerCase().includes(term)
          );
        })
        .slice(0, 5); // Limit to 5 results
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className='w-full sticky top-0 transition-all duration-300 backdrop-blur-md bg-opacity-90 z-50'>
      <div className='w-full bg-[#00278C] p-2'>
        <div className='container-custom'>
          <p className='text-white text-sm text-center'>
            Free Shipping on Orders Over $1000
          </p>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container-custom relative'>
          <div className='flex items-center justify-between py-4'>
            <Link to='/' className='text-[#232323] text-xl font-bold shrink-0'>
              <img src={logo} alt='logo' className='w-[120px] h-[50px]' />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className='lg:hidden p-2 text-[#232323] hover:text-[#00278C] '
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-6'>
              <Link
                to='/'
                className='text-[#232323] hover:text-[#00278C] transition-all duration-300'
              >
                Home
              </Link>
              <Link
                to='/shop'
                className='text-[#232323] hover:text-[#00278C] transition-all duration-300'
              >
                Shop
              </Link>
              <Link
                to='/about'
                className='text-[#232323] hover:text-[#00278C] transition-all duration-300'
              >
                About
              </Link>
              <Link
                to='/contact'
                className='text-[#232323] hover:text-[#00278C] transition-all duration-300'
              >
                Contact
              </Link>
            </div>

            {/* Desktop Search and Icons */}
            <div className='hidden lg:flex items-center space-x-6'>
              <div className='relative w-[283px]'>
                <form onSubmit={handleSearch} className='relative w-full'>
                  <input
                    type='search'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleSearchInput}
                    className='w-full h-[40px] p-2 pr-10 bg-[#E6EAF5] border-none focus:outline-none rounded'
                  />
                  <button
                    type='submit'
                    className='absolute right-3 top-1/2 -translate-y-1/2'
                    aria-label='Search'
                  >
                    <AiOutlineSearch className='text-[#232323] text-xl' />
                  </button>

                  {/* Search Results Dropdown */}
                  {searchResults.length > 0 && (
                    <div className='absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto'>
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          className='p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2'
                          onClick={() => {
                            setSearchTerm(product.Name);
                            setSearchResults([]);
                            navigate(`/search?q=${product.Name}`);
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.Name}
                            className='w-10 h-10 object-cover rounded'
                          />
                          <span className='line-clamp-1'>{product.Name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </form>
              </div>

              <div className='flex items-center space-x-4'>
                <Link
                  to='/wishlist'
                  className='relative text-2xl text-gray-600 hover:text-[#00278C] transition-colors duration-300'
                >
                  <AiOutlineHeart />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#EF0303] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link
                  to='/cart'
                  className='relative text-2xl text-gray-600 hover:text-[#00278C] transition-colors duration-300'
                >
                  <AiOutlineShoppingCart />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#EF0303] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    <button className='text-[#232323] hover:text-[#00278C] text-2xl transition-all duration-300'>
                      <AiOutlineUser aria-label='Sign in' />
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:hidden fixed top-0 left-0 w-full h-[calc(55vh-128px)] md:h-[calc(50vh-128px)] bg-white transform transition-transform duration-300 ease-in-out z-50 border-b-2`}
            style={{ top: 'calc(88px + 40px)' }} // Height of header + announcement bar
          >
            <div className='h-full overflow-y-auto'>
              <div className='container-custom py-4 space-y-4'>
                <div className='space-y-4'>
                  <Link
                    to='/'
                    className='block text-[#232323] hover:text-[#00278C] transition-all duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to='/shop'
                    className='block text-[#232323] hover:text-[#00278C] transition-all duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    to='/about'
                    className='block text-[#232323] hover:text-[#00278C] transition-all duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to='/contact'
                    className='block text-[#232323] hover:text-[#00278C] transition-all duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                <div className='pt-4 border-t'>
                  <form onSubmit={handleSearch} className='relative w-full'>
                    <input
                      type='search'
                      placeholder='Search'
                      value={searchTerm}
                      onChange={handleSearchInput}
                      className='w-full h-[40px] p-2 pr-10 bg-[#E6EAF5] border-none focus:outline-none rounded'
                    />
                    <button
                      type='submit'
                      className='absolute right-3 top-1/2 -translate-y-1/2'
                      aria-label='Search'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <AiOutlineSearch className='text-[#232323] text-xl' />
                    </button>
                  </form>
                </div>

                <div className='flex justify-center space-x-6 pt-4 border-t'>
                  <Link
                    to='/wishlist'
                    className='relative text-2xl text-gray-600 hover:text-[#00278C] transition-colors duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <AiOutlineHeart className='text-3xl' />
                    {wishlistCount > 0 && (
                      <span className='absolute -top-2 -right-2 bg-[#EF0303] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    to='/cart'
                    className='relative text-2xl text-gray-600 hover:text-[#00278C] transition-colors duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <>
                      {cartCount > 0 && (
                        <div className='relative'>
                          <AiOutlineShoppingCart aria-label='Shopping cart' className='text-3xl' />
                            <span className='absolute -top-2 -right-2 bg-[#EF0303] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                            {cartCount}
                          </span>
                        </div>
                      )}
                    </>
                  </Link>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>
                      <button
                        className='text-[#232323] hover:text-[#00278C] text-2xl transition-all duration-300'
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <AiOutlineUser aria-label='Sign in' className='text-3xl' />
                      </button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
