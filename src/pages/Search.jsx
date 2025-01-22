import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import products from '../constants/products';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(product => {
      const searchTerms = query.split(' ');
      return searchTerms.some(term => 
        product.Name.toLowerCase().includes(term) ||
        product.type.toLowerCase().includes(term) ||
        product.cat.toLowerCase().includes(term) ||
        product.Name.toLowerCase().charAt(0) === term.charAt(0)
      );
    });

    setSearchResults(filteredProducts);
  }, [query]);

  return (
    <div className="min-h-screen py-8 px-14">
        <button onClick={() => navigate('/')} className='text-black hover:text-gray-500 transition-all duration-300'> <IoReturnUpBackOutline className='mr-2 flex flex-row items-center justify-center' /> Back to Home</button>
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for &ldquo;{query}&rdquo;
      </h2>
      <p className="text-gray-600 mb-6">
        Found {searchResults.length} items
      </p>
      <ProductGrid products={searchResults} addToCart={addToCart} />
    </div>
  );
};

export default Search; 