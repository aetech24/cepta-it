import React from 'react';
import AboutImage from '../assets/about-image.png';
import AboutImage2 from '../assets/FAQ.png';
import TeamMember1 from '../assets/member1.png'
import TeamMember2 from '../assets/member2.png'
import TeamMember3 from '../assets/member3.png'
const About = () => {
  return (
    <main className='min-h-screen py-8 '>
      <div className='w-full gap-14'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-[100%] lg:w-[1226px] lg:h-[408px] items-center justify-center mx-auto px-4 md:px-14 pt-6 md:pt-6 lg:pt-2 mb-14'>
          <div className=' lg:w-[534px] lg:h-[267px] w-[100%] h-[100%] lg:items-start lg:justify-start items-center justify-center flex flex-col gap-4'>
            <h1 className='text-black lg:text-4xl md:text-3xl text-sm font-[600] text-center md:text-start relative'>
              About Us
              <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[50%] lg:w-[50%] md:w-[50%] absolute left-1/2 -translate-x-1/2 lg:left-10 top-full mt-1'></span>
            </h1>
            <p className='text-black lg:text-2xl md:text-xl text-sm font-[400] md:text-justify text-start items-center justify-center text-spacing-1 word-spacing-1 lg:text-start relative'>
            Welcome to our E-commerce platform, where shopping meets simplicity and convenience. We are committed to providing a seamless and enjoyable shopping experience for all our customers. Our platform is designed to make it easy to browse, shop, and find the products you love, all from the comfort of your home.
            </p>
            </div>
            <img src={AboutImage} alt='' className='lg:w-[588px] lg:h-[408px] w-[100%] h-[100%] object-cover rounded-lg'/>
        </div>
        <div className='w-full flex flex-col-reverse lg:flex-row my-10 mb-14'>
            <img src={AboutImage2} alt="" className='w-full lg:w-1/2 h-[400px] lg:h-[608px] object-cover'/>
            <div className='w-full lg:w-1/2 h-[300px] lg:h-[608px] md:h-[308px] bg-[#E6EAF5] flex flex-col gap-4 lg:items-start lg:justify-center md:items-center justify-center lg:p-8 md:px-10 px-4 '>
              <h1 className='text-black lg:text-4xl md:text-3xl text-lg font-[600] text-center md:text-center items-center justify-center relative'>
                Our Mission
                <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[50%] lg:w-[50%] md:w-[50%] absolute left-1/2 -translate-x-1/2 lg:left-14 top-full mt-1'></span>
                </h1>
              <p className='text-black lg:text-2xl md:text-lg text-sm font-[400] md:text-justify text-start text-spacing-1 word-spacing-1 lg:text-start relative'>
                Our mission is to provide a seamless, user-friendly E-commerce platform that makes shopping easy and enjoyable for customers while offering powerful tools for businesses to manage their products and operations efficiently. We are dedicated to creating an intuitive online marketplace where users can discover and purchase products with confidence and convenience.
              </p>
            </div>
        </div>
        <div className='lg:w-[1258px] w-[100%] mx-auto flex lg:flex-col flex-col items-center gap-6 px-4 md:px-6 lg:px-8 mb-14'>
            <div className='w-[100%] lg:items-center md:items-center flex flex-col gap-4 mb-4'>
            <h1 className='text-black text-2xl md:text-3xl lg:text-4xl font-[600] text-center relative'>
              Meet the Team
              <span className='block h-[2px] bg-[#EF0303] hover:bg-[#00278C] transition-all duration-300 w-[50%] absolute left-1/2 -translate-x-1/2 top-full mt-1'></span>
            </h1>
            <p className='text-black text-base md:text-xl lg:text-2xl font-[400] text-center px-4 md:px-6 lg:px-8'>
            Get to know the people who are making it all happen and stay tuned for the exciting features and products to enhance your experience!
            </p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 py-8'>
                <div className='w-full bg-[#E6EAF5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src={TeamMember1} alt="TeamMember" className='w-full h-[200px] md:h-[auto] object-cover rounded-t-lg'/>
                <div className='w-full bg-white rounded-b-lg p-6'>
                    <h1 className='text-black text-xl md:text-2xl font-[600] mb-2'>
                            John Doe
                    </h1>
                    <p className='text-black text-base md:text-xl font-[400]'>
                        Global Data Director
                    </p>
                </div>
                </div>
                <div className='w-full bg-[#E6EAF5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src={TeamMember2} alt="TeamMember" className='w-full h-[200px] md:h-[auto] object-cover rounded-t-lg'/>
                <div className='w-full bg-white rounded-b-lg p-6'>
                    <h1 className='text-black text-xl md:text-2xl font-[600] mb-2'>
                            John Doe
                    </h1>
                    <p className='text-black text-base md:text-xl font-[400]'>
                        Global Data Director
                    </p>
                </div>
                </div>
                <div className='w-full bg-[#E6EAF5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src={TeamMember3} alt="TeamMember" className='w-full h-[200px] md:h-[auto] object-cover rounded-t-lg'/>
                <div className='w-full bg-white rounded-b-lg p-6'>
                    <h1 className='text-black text-xl md:text-2xl font-[600] mb-2'>
                            John Doe
                    </h1>
                    <p className='text-black text-base md:text-xl font-[400]'>
                        Global Data Director
                    </p>
                </div>
                </div>
            </div>
        </div>
      </div>    
    </main>
  );
};

export default About;
