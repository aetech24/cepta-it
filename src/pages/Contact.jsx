import { CiLocationOn } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <main className='min-h-screen p-8'>
      {/* Breadcrumb */}
      <div className='flex flex-row items-center gap-2 mb-6 md:mb-10 overflow-x-auto whitespace-nowrap'>
        <p className='text-black text-sm'>Home</p>
        <IoIosArrowForward className='text-black text-sm flex-shrink-0' />
        <p className='text-[#EF0303] text-sm'>Contact</p>
      </div>

      <div className='w-full flex flex-col px-4 md:px-14'>
        <div>
          <h4 className='text-black text-2xl font-[400] text-center md:text-center relative mb-4'>
            Contact Us
            <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[100px] absolute top-full left-1/2 -translate-x-1/2 mt-1'></span>
          </h4>
          <p className='text-black text-lg font-[400] text-center md:text-center px-2'>
            We would love to hear from you! Leave a message below and we&apos;ll
            get back to you soon.
          </p>
        </div>
        <div className='flex flex-row justify-center items-center gap-14 mt-10 max-md:flex-col lg:flex-row lg:gap-14 max-md:gap-4 max-md:justify-center sm:justify-center sm:items-center sm:flex-col sm:gap-4'>
          <div className='flex items-center gap-4 p-4 border border-[#] w-[260px] h-[64px]'>
            <div className='w-[45px] h-[45px] bg-[#EF0303] flex items-center justify-center'>
              <FaMapMarkerAlt className='text-white text-[20px]' />
            </div>
            <div>
              <h5 className='text-black text-[20px] font-[400]'>
                Our Location
              </h5>
              <address className='text-black text-[16px] font-[400]'>
                Accra, Ghana
              </address>
            </div>
          </div>
          <div className='flex items-center gap-4 p-4 border border-[#] w-[260px] h-[64px]'>
            <div className='w-[45px] h-[45px] bg-[#EF0303] flex items-center justify-center'>
              <FaPhoneAlt className='text-white text-[20px]' />
            </div>
            <div>
              <h5 className='text-black text-[20px] font-[400]'>
                Call Us
              </h5>
              <address className='text-black text-[16px] font-[400]'>
                +233 55 123 4567
              </address>
            </div>
          </div>
          <div className='flex items-center gap-4 p-4 border border-[#] w-[260px] h-[64px]'>
            <div className='w-[45px] h-[45px] bg-[#EF0303] flex items-center justify-center'>
              <FaEnvelope className='text-white text-[20px]' />
            </div>
            <div>
              <h5 className='text-black text-[20px] font-[400]'>
                Email
              </h5>
              <address className='text-black text-[16px] font-[400]'>
                info@example.com
              </address>
            </div>
          </div>

        </div>
        <div className='flex flex-col gap-4 mt-10 lg:w-[1240px] max-md:w-[100%] max-md:px-4 sm:w-[100%]'>
          <div className='flex flex-col gap-2'>
            <p className='text-black text-[20px] font-[400] text-center md:text-center relative mb-4'>
              Leave a Message
              <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[100px] absolute top-full left-1/2 -translate-x-1/2 mt-1'></span>
            </p>
          </div>
          <form className='flex flex-col gap-4 items-center w-[100%] max-md:flex-col max-md:gap-4 max-md:items-center max-md:justify-center'>
            <div className='flex flex-row gap-4 max-md:flex-col max-md:gap-4 lg:flex-row lg:gap-4 lg:w-[1240px]'>
                <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='text-black text-[16px] font-[400]'>Name</label>
                <input type='text' placeholder='Name' className='w-[200px] h-[40px] border border-[#00278C] rounded-md p-2 max-md:w-[100%] max-md:px-4 lg:w-[610px] lg:h-[40px]' />
                </div>
                <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-black text-[16px] font-[400]'>Email</label>
                <input type='email' placeholder='Email' className='w-[200px] h-[40px] border border-[#00278C] rounded-md p-2 max-md:w-[100%] max-md:px-4 lg:w-[610px] lg:h-[40px]' />
                </div>
            </div>
            <div className='flex flex-col gap-2 lg:w-[1240px]'>
                <label htmlFor='phone' className='text-black text-[16px] font-[400]'>Phone Number</label>
                <input type="number" name="phone" id="phone" placeholder='Phone Number' className='w-[400px] h-[40px] border border-[#00278C] rounded-md p-2 max-md:w-[100%] max-md:px-4 lg:w-[1240px] lg:h-[40px]' />
            </div>
            <div className='flex flex-col gap-2 lg:w-[1240px]'>  
                <label htmlFor='message' className='text-black text-[16px] font-[400] items-start justify-start'>Message</label>
                <textarea placeholder='Message' className='w-[400px] h-[100px] border border-[#00278C] rounded-md p-2 max-md:w-[100%] max-md:h-[100px] max-md:px-4 lg:w-[1240px] lg:h-[100px]'></textarea>
            </div>
            <button type='submit' className='bg-[#EF0303] text-white text-[16px] font-[400] px-4 py-2 lg:w-[272px] lg:h-[48px] hover:bg-[#00278C] transition-all duration-300'>Send</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
