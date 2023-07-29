import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import BrandCard from "../../components/BrandCard/BrandCard";
import HotelCard from "../../components/HotelCard/HotelCard";
import AvailableCard from  "../../components/AvailableCard/AvailableCard"
import Review from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
const HomePage = () => {
    return ( 
        <>
        <Hero />
     
      
<div className=" mt-32 mb-44">
<HotelCard
            id="1234"
             title='Trending Hotels'
            description="Experience luxury beyond your expextations in the lap of nature"
         />

</div>
          
<div className=" mt-16 mb-44">
           <BrandCard
                  id="1234"
                  title='Trending Brands'
                  description="Everything looks good with confidence and that confidence is what our brands gives, a better you."
            />
            </div>

            <div>
               <Section/>
            </div>

<div className=" mt-16 mb-44">
                <AvailableCard
                  id="1234"
                  title='Available Hotel Space'
                  description="Unlock your creative haven: get your dream space today"
            />

</div>

<Review/>

<Footer/>
       
        </>
     );
}
 
export default HomePage;