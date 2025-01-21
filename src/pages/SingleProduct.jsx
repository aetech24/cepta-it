import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import products from '../constants/products';

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className='min-h-screen py-8 w-[100%] mx-auto'>
    <div className='flex flex-row items-center gap-2 mb-10'>
        <p className='text-black text-sm'>Home</p>
        <IoIosArrowForward className='text-black text-sm' />
        <p className='text-[black] text-sm'>{product.category}</p>
        <IoIosArrowForward className='text-black text-sm' />
        <p className='text-[black] text-sm'>{product.Name}</p>
      </div>
      <div className='flex flex-row items-center gap-2 mb-10'>
        <div className='flex flex-row items-center gap-2 mb-10'>
          <img src={product.image} alt={product.Name} className='w-[500px] h-[500px]' />
        </div>
        <div className='flex flex-col items-center gap-2 mb-10'>
          <h2 className='text-black text-4xl font-bold text-wrap h-[132px] gap-2 tracking-wide leading-10'>
            {product.Name}
          </h2>
          <p className='text-black text-sm'>{product.description}</p>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
