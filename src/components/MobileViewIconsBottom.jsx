import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
// import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const MobileViewIconsBottom = () => {
  const navigate = useNavigate()
  return (
    <div className='fixed flex items-center space-x-4 lg:hidden  bottom-0 left-0 w-full h-[64px] bg-white opacity-80 z-50 justify-center gap-8'>
      <AiOutlineHeart onClick={() => navigate('/wishlist')} className='text-[#232323] hover:text-blue-400 text-2xl' />
      <AiOutlineShoppingCart onClick={() => navigate('/cart')} className='text-[#232323] hover:text-blue-400 text-2xl' />
      <SignedOut>
        <SignInButton>
          <AiOutlineUser className='text-[#232323] hover:text-blue-400 text-2xl' />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default MobileViewIconsBottom