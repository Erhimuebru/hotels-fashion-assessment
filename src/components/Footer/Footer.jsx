import React from 'react';
import { SocialIcon } from 'react-social-icons'
import "./Footer.css"

const Footer = () => {
  return (
    <><footer className="bg-white sm:ml-5 text-black py-6">
      <div className="containe mx-auto grid grid-cols-4 ">
        {/* Column 1 */}
        <div className="col-span-4 sm:col-span-1">
          <h3 className="text-red-900 font-semibold text-lg mb-4">Helpful Tips</h3>
          <p className=' Foot-links mb-4'>How it Works</p>
          <p className='Foot-links mb-4'>Rent Space</p>
          <p className='Foot-links mb-4'>Hotels Dashboard</p>
          <p className='Foot-links mb-4'>Trending Hotels</p>
          <p className='Foot-links mb-4'>Verified Brands</p>

        </div>

        {/* Column 2 */}
        <div className="col-span-4 sm:col-span-1">
          <h3 className=" text-lg mb-4 text-red-900 font-semibold">Quicklinks</h3>
          <p className='Foot-links mb-4'>About US</p>
          <p className='Foot-links mb-4'>FAQs</p>
          <p className='Foot-links mb-4'>Terms Of Service</p>
          <p className='Foot-links mb-4'> Privacy Policy</p>
          <p className='Foot-links mb-4'>Cookie Policy</p>
        </div>

        {/* Column 3 */}
        <div className="col-span-4 sm:col-span-1">
          <h3 className="text-red-900 font-semibold text-lg mb-4">Discover</h3>
          <p className='Foot-links mb-4'>City Guide</p>
          <p className='Foot-links mb-4'>Blog</p>
          <p className='Foot-links mb-4'>Reviews</p>
          <p className='Foot-links mb-4'>Events</p>
        </div>

        {/* Column 4 */}
        <div className="col-span-4 sm:col-span-1">
          <p className="Foot-links  mb-4">Get updates about available space, weekly digest of our most important activities and more in your email</p>
          <div className="flex">
            <input type="email" placeholder="Enter Your Email Address" className=" px-3 py-2 border border-black" />

            <button className="text-white bg-red-900 px-4 ml-2 ">Subscribe</button>
          </div>
          <p className='pt-4 underline'>mailto:theteam@hotelsfashion.com</p>
          <div className='mt-2 -ml-2'>
            <SocialIcon url='https://www.facebook.com' fgColor='black' bgColor='transparent' />
            <SocialIcon url='https://www.linkedin.com' fgColor='black' bgColor='transparent' />
            <SocialIcon url='https://www.instagram.com' fgColor='black' bgColor='transparent' />

            <SocialIcon url='https://twitter.com' fgColor='black' bgColor='transparent' />

          </div>
        </div>

      </div>

    </footer>
     <div className='footer-bottom bg-black'>        
     <p className="pl-3 pt-3 pb-1 text-gray-400">Hotel Fashion {2023}. © All rights reserved.</p>
     </div>
     </>
  );
};

export default Footer;
