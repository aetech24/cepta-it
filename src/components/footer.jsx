import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import logo from '../assets/ceptalogo 1.jpg';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className='bg-[#000000] text-white w-full'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <Link to="/" className='inline-block'>
              <img src={logo} alt="Cepta IT Logo" className='w-[120px] h-[50px] mb-6' />
            </Link>
            <p className='text-gray-400 mb-6 max-w-md'>
              Your trusted partner in technology and innovation. We provide cutting-edge solutions
              for all your tech needs.
            </p>
            {/* Social Links */}
            <div className='flex space-x-4'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EF0303] transition-colors duration-300'>
                <FaFacebookF className='w-5 h-5' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EF0303] transition-colors duration-300'>
                <FaTwitter className='w-5 h-5' />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EF0303] transition-colors duration-300'>
                <FaInstagram className='w-5 h-5' />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#EF0303] transition-colors duration-300'>
                <FaLinkedinIn className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <Link to='/shop' className='text-gray-400 hover:text-white transition-colors duration-300'>
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-gray-400 hover:text-white transition-colors duration-300'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-gray-400 hover:text-white transition-colors duration-300'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/privacy-policy' className='text-gray-400 hover:text-white transition-colors duration-300'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/terms' className='text-gray-400 hover:text-white transition-colors duration-300'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Contact Info</h3>
            <ul className='space-y-3'>
              <li className='flex items-center space-x-3 text-gray-400'>
                <IoLocationOutline className='w-5 h-5 text-[#EF0303]' />
                <span>Palace Mall, Spintex RD. Accra Ghana.</span>
              </li>
              <li>
                <a href='mailto:info@ceptait.com' className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300'>
                  <IoMailOutline className='w-5 h-5 text-[#EF0303]' />
                  <span>info@ceptait.com</span>
                </a>
              </li>
              <li>
                <a href='tel:+233555123456' className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300'>
                  <IoCallOutline className='w-5 h-5 text-[#EF0303]' />
                  <span>+233 555 123 456</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Newsletter</h3>
            <p className='text-gray-400 mb-4'>Subscribe to our newsletter for updates and exclusive offers.</p>
            <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF0303]'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full px-4 py-2 bg-[#EF0303] text-white rounded-lg hover:bg-[#00278C] transition-colors duration-300'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 '>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='text-sm text-gray-400'>
              &copy; {new Date().getFullYear()} Cepta IT. All rights reserved.
            </div>
            <div className='mt-4 md:mt-0'>
              <div className='flex space-x-6 text-sm text-gray-400'>
                <Link to='/privacy' className='hover:text-white transition-colors duration-300'>
                  Privacy
                </Link>
                <Link to='/terms' className='hover:text-white transition-colors duration-300'>
                  Terms
                </Link>
                <Link to='/sitemap' className='hover:text-white transition-colors duration-300'>
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
