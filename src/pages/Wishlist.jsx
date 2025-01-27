import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineClose } from "react-icons/ai";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600">Add items to your wishlist to save them for later!</p>
        </div>
        <button onClick={() => navigate('/shop')} className="mt-4 px-4 py-2 bg-[#EF0303] text-white rounded hover:bg-red-600 transition-all duration-300">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      {/* Breadcrumb */}
      <div className='flex flex-row items-center gap-2 mb-6 md:mb-10 overflow-x-auto whitespace-nowrap'>
        <p className='text-black text-sm'>Home</p>
        <IoIosArrowForward className='text-black text-sm flex-shrink-0' />
        <p className='text-black text-sm'>Shop</p>
        <IoIosArrowForward className='text-black text-sm flex-shrink-0' />
        <p className='text-[#EF0303] text-sm'>Wishlist</p>
      </div>

      <div className=' lg:w-[534px] w-[100%] h-[100%] lg:items-start lg:justify-start items-center justify-center flex flex-col gap-6 mb-6'>
        <h1 className='text-black lg:text-3xl md:text-2xl text-sm font-[600] text-center md:text-start relative'>
          Wishlist
          <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[50%] lg:w-[50%] md:w-[50%] absolute left-1/2 -translate-x-1/2 lg:left-10 top-full mt-1'></span>
        </h1>
        <p className='text-black lg:text-1xl md:text-xl text-sm font-[400] md:text-justify text-start items-center justify-center text-spacing-1 word-spacing-1 lg:text-start relative'>
          Save your favorite items and easily revisit them later!
        </p>
      </div>
      <h5 className="text-2xl font-bold mb-8">My Wishlists ({wishlist.length} items)</h5>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
        {wishlist.map((product) => (
          <div key={product.id} className="bg-white p-4 lg:flex lg:flex-row lg:items-center lg:justify-between md:flex md:flex-row md:items-center md:justify-between shadow-md">
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="p-2 text-3xl text-opacity-50 text-[#232323] hover:text-[#EF0303] transition-colors duration-300 rounded-full bg-[#FDE6E6] float-right"
              aria-label="Remove from wishlist"
            >
              <AiOutlineClose />
            </button>

            <div className="relative aspect-square mb-4 w-[82px] h-[82px] items-center justify-center flex-shrink-0">
              <img
                src={product.image}
                alt={product.Name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{product.Name}</h3>
            <p className="text-[#EF0303] font-bold text-xl mb-4">${parseFloat(product.price).toFixed(2)}</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="flex-1 bg-[#EF0303] text-white py-2 px-4 hover:bg-[#001d6e] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-row items-center justify-center gap-2 mt-4'>
        <button onClick={() => navigate('/shop')} className="justify-center mt-4 px-4 py-2 bg-[#EF0303] text-white hover:bg-[#001d6e] transition-all duration-300">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Wishlist;