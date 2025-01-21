import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/ceptalogo 1.jpg';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className='bg-[#000000] text-white py-8 px-10 w-full h-[527px] items-center flex flex-col'>
      <div className='container mx-auto px-4 flex flex-row items-center m-auto justify-between w-[1184px] h-[255px]'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-1 w-[1184px] h-[255px]'>
            <div><img src={logo} alt="logo" className='w-[120px] h-[50px] mt-0 cursor-pointer' onClick={() => navigate('/')}></img></div>
          <div className='flex flex-col space-y-2'>
            <h3 className='text-xl font-bold mb-4'>Your Account</h3>
            <div className='flex flex-col space-y-2'>
              <Link to='/' className='hover:text-blue-400 transition-all duration-300'>
                My Account
              </Link>
              <Link to='/' className='hover:text-blue-400 transition-all duration-300'>
                Login/Register
              </Link>
              <Link to='/' className='hover:text-blue-400 transition-all duration-300'>
                Cart
              </Link>
              <Link to='/shop' className='hover:text-blue-400 transition-all duration-300'>
                Shop
              </Link>
              <Link to='/checkout' className='hover:text-blue-400 transition-all duration-300'>
                Payment
              </Link>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Products</h3>
            <div className='flex flex-col space-y-2'>
              <Link to='/' className='hover:text-blue-400 transition-all duration-300   '>
                New Arrivals
              </Link>
              <Link to='/shop' className='hover:text-blue-400 transition-all duration-300'>
                Best Sellers
              </Link>
              <Link to='/about' className='hover:text-blue-400 transition-all duration-300'>
                Delivery
              </Link>
              <Link to='/contact' className='hover:text-blue-400 transition-all duration-300'>
                Track Order
              </Link>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <div className='flex flex-col space-y-2'>
              <Link to='/' className='hover:text-blue-400 transition-all duration-300'>
                Privacy Policy
              </Link>
              <Link to='/shop' className='hover:text-blue-400 transition-all duration-300'>
                Terms of Service
              </Link>
              <Link to='/about' className='hover:text-blue-400 transition-all duration-300'>
                FAQ
              </Link>
              <Link to='/contact' className='hover:text-blue-400 transition-all duration-300'>
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <address>Palace Mall, Spintex RD. Accra Ghana.</address>
            <Link to='mailto:info@example.com'>Email: info@example.com</Link>
            <Link to='tel:+233555123456'>Phone: (555) 123-4567</Link>
          </div>
        </div>
      </div>
      <div className='m-auto text-center p-auto'>
          <p>&copy; 2024 Cepta IT. All rights reserved.</p>
        </div>
    </footer>

  );
};

export default Footer;
