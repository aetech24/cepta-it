import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const localData = localStorage.getItem('wishlist');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      setWishlist, 
      addToWishlist, 
      removeFromWishlist,
      wishlistCount 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WishlistContext, WishlistProvider as default };