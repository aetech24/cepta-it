import { useState, useEffect } from 'react';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
// import { Link } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MobileViewIconsBottom = () => {
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);
  const navigate = useNavigate();
  return (
    <div className='fixed flex items-center space-x-4 lg:hidden  bottom-0 left-0 w-full h-[64px] bg-white opacity-80 z-50 justify-center gap-8'>
      <AiOutlineHeart
        onClick={() => navigate('/wishlist')}
        className='text-[#232323] hover:text-blue-400 text-2xl'
      />
      <>
        {cartCount > 0 && (
          <div className='relative'>
              <AiOutlineShoppingCart aria-label='Shopping cart' />
            <span className='absolute bg-[#EF0303] text-white text-xs font-bold rounded-full px-2 h-[15px] w-[15px] flex items-center justify-center top-[-5px] right-[-5px]'>
              {cartCount}
            </span>
          </div>
        )}
      </>
      <SignedOut>
        <SignInButton>
          <AiOutlineUser className='text-[#232323] hover:text-blue-400 text-2xl' />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default MobileViewIconsBottom;
