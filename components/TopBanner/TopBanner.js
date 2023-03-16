import React, {  useState ,useEffect} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image from '../../public/assets/SwiperImg/Frame.png'
import Image from "next/image";
const TopBanner = () => {
  const [category, setCategory] = useState([]);
     useEffect(()=>{
try {
    fetch(`https://fakestoreapi.com/products/categories`).then(res=>res.json()).then(data=> setCategory(data)) 
} catch (error) {
    
}

     }, [])
  



  return (
    <>
   
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
     
    >
      <SwiperSlide  className='topbanner'>
<div className="flex items-start justify-between container mx-auto mt-[60px] ">
<div className="w-[400px]">
          <p className="text-[30px]">
            Shop <span className="text-[#0AAEB9] ">Computer & experience
</span>
          </p>
          <p>
           You cannot inspect quality into the product; it is already there.


          </p>
          <p>
        I am not a product of my circumstances. I am a product of my decisions.


          </p>
          <button className="h-[40px] w-[152px] bg-[#14B1F0] text-white rounded-[5px] mt-1">
                        View More
                    </button>

        </div>
        <div className="pr-10">
<Image src={image} width={150} height={150} alt=''/>
          
        </div>
</div>
        
      </SwiperSlide>
      <SwiperSlide  className='topbanner'>
<div className="flex items-start justify-between container mx-auto mt-[60px] ">
<div className="w-[400px]">
          <p className="text-[30px]">
            Shop <span className="text-[#0AAEB9] ">Computer & experience
</span>
          </p>
          <p>
           You cannot inspect quality into the product; it is already there.


          </p>
          <p>
        I am not a product of my circumstances. I am a product of my decisions.


          </p>
          <button className="h-[40px] w-[152px] bg-[#14B1F0] text-white rounded-[5px] mt-1">
                        View More
                    </button>

        </div>
        <div className="pr-10">
<Image src={image} width={150} height={150} alt=''/>
          
        </div>
</div>
        
      </SwiperSlide>
      <SwiperSlide  className='topbanner'>
<div className="flex items-start justify-between container mx-auto mt-[60px] ">
<div className="w-[400px]">
          <p className="text-[30px]">
            Shop <span className="text-[#0AAEB9] ">Computer & experience
</span>
          </p>
          <p>
           You cannot inspect quality into the product; it is already there.


          </p>
          <p>
        I am not a product of my circumstances. I am a product of my decisions.


          </p>
          <button className="h-[40px] w-[152px] bg-[#14B1F0] text-white rounded-[5px] mt-1">
                        View More
                    </button>

        </div>
        <div className="pr-10">
<Image src={image} width={150} height={150} alt=''/>
          
        </div>
</div>
        
      </SwiperSlide>
      
      ...
    </Swiper>

<div className="bottom-banner pt-5 mb-10 ">

   <div>
     <Swiper

      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      
        
        {category.map(sCategory => {
  return <SwiperSlide key={sCategory} className='slider-card-div'>
          <div className='relative bg-[white]  '>
      
                    <div className='absolute top-[220px] -left-[10px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
        <p className='text-[25px]'>{sCategory }</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div></SwiperSlide>
})}

    </Swiper>
   </div>

</div>

  <div className="container mx-auto mb-10">
    <hr/>
   </div>
  </>
  )
}


export default TopBanner