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
import { useWishlist } from '../context/WishlistContext';

const MobileViewIconsBottom = () => {
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(() => {
    setWishlistCount(wishlist.length);
  }, [wishlist]);
  return (
    <div className='fixed flex items-center space-x-4 lg:hidden  bottom-0 left-0 w-full h-[64px] bg-white opacity-80 z-50 justify-center gap-8'>
      <>
        {wishlistCount > 0 && (
          <div className='relative'>
                    <AiOutlineHeart aria-label='Wishlist' onClick={() => navigate('/wishlist')} className='text-[#232323] hover:text-[#EF0303] text-3xl' />
                    <span className="absolute -top-2 -right-2 bg-[#EF0303] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  </div>
        )}
        
        {cartCount > 0 && (
          <div className='relative'>
              <AiOutlineShoppingCart aria-label='Shopping cart' onClick={() => navigate('/cart')} className='text-[#232323] hover:text-[#EF0303] text-3xl' />
            <span className='absolute -top-2 -right-2 bg-[#EF0303] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
              {cartCount}
            </span>
          </div>
        )}
        
        <SignedOut>
          <SignInButton>
            <AiOutlineUser className='text-[#232323] hover:text-blue-400 text-3xl' />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </>
    </div>
  );
};

export default MobileViewIconsBottom;
