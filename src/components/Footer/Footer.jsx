import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto grid grid-cols-4 gap-1">
        {/* Column 1 */}
        <div className="col-span-4 sm:col-span-1">
          <h3 className="text-red-900 font-semibold text-lg mb-4">Helpful Tips</h3>
        <p className='mb-4'>How it Works</p>
        <p className='mb-4'>Rent Space</p>
        <p className='mb-4'>Hotels Dashboard</p>
        <p className='mb-4'>Trending Hotels</p>
        <p className='mb-4'>Verified Brands</p>

        </div>

        {/* Column 2 */}
        <div className="col-span-4 sm:col-span-1">
          <h3 className=" text-lg mb-4 text-red-900 font-semibold">Quicklinks</h3>
          <p className='mb-4'>About US</p>
          <p className='mb-4'>FAQs</p>
          <p className='mb-4'>Terms Of Service</p>
          <p className='mb-4'> Privacy Policy</p>
          <p className='mb-4' >Cookie Policy</p>
        </div>

        {/* Column 3 */}
        <div className="col-span-4 sm:col-span-1">
          <h3 className="text-red-900 font-semibold text-lg mb-4">Discover</h3>
        <p className='mb-4'>City Guide</p>
        <p className='mb-4'>Blog</p>
        <p className='mb-4'>Reviews</p>
        <p className='mb-4'>Events</p>
        </div>

        {/* Column 4 */}
        <div className="col-span-4 sm:col-span-1">
          <p className=" mb-4">Get updates about available space, weekly digest of our most important activities and more in your email</p>
          <div className="flex">
          <input type="email" placeholder="Enter Your Email Address" className=" px-3 py-2 border border-black" />

            <button className="text-white bg-red-900 px-4 ml-2 ">Subscribe</button>
          </div>
          <p className='pt-4 underline'>mailto:theteam@hotelsfashion.com</p>
          <div className='mt-2 -ml-2'>
          <SocialIcon url='https://www.facebook.com'  fgColor='black' bgColor='transparent'/>
        <SocialIcon url='https://www.linkedin.com' fgColor='black' bgColor='transparent'/>
        <SocialIcon url='https://www.instagram.com'  fgColor='black' bgColor='transparent'/>
             
                <SocialIcon url='https://twitter.com'  fgColor='black' bgColor='transparent'/>
               
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
