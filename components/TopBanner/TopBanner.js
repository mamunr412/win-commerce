import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import image1 from '../../public/assets/BottomImg/1.png'
import image2 from '../../public/assets/BottomImg/2.png'
import image3 from '../../public/assets/BottomImg/3.png'
import image4 from '../../public/assets/BottomImg/4.png'
import Image from "next/image";

import image from "../../public/assets/SwiperImg/bgimg.png";

// 
const TopBanner = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    // let appendNumber = 4;
    // let prependNumber = 1;

  return (
    <>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex items-start justify-between topbanner" >
                <div className="h-[340px] w-[490px] p-6 ml-[85px]">
                    <h1><span className="text-[57px]">Shop</span> <span className="text-[57px] text-[#14B1F0]">Computer</span> <br /> <span className="text-[57px] text-[#14B1F0]">& experience</span></h1>
                    <p className="text-[13px]">You cannot inspect quality into the product; it is already there. <br />
                        I am not a product of my circumstances. I am a product of my decisions.</p>
                    <button className="h-[40px] w-[152px] bg-[#14B1F0] text-white rounded-[5px] mt-1">
                        View More
                    </button>
                </div>
                <div className="pt-[52px] ">
                    <div className="h-[165px] w-[165px] rounded-full text-[47px] text-white mr-[150px] flex items-center justify-center radialGradiant"
                    >
                        <h1>40% <br /> Off</h1>
                    </div>
                </div>
            </div></SwiperSlide>
        
      </Swiper>
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={0}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      
      <SwiperSlide><div className='h-[250px] w-[300px] border-[1px] relative'>
      <Image
    src={image1}
      alt=""
      width={500}
      height={500}
    />
                    {/* <img src={image1} alt="" className='h-[197px] w-full object-cover' /> */}
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Electronics</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide><div className='h-[250px] w-[300px] border-[1px] relative'>
      <Image
    src={image2}
      alt=""
      width={500}
      height={500}
    />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Electronics</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide><div className='h-[250px] w-[300px] border-[1px] relative'>
      <Image
    src={image3}
      alt=""
      width={500}
      height={500}
    />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Electronics</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide><div className='h-[250px] w-[300px] border-[1px] relative'>
      <Image
    src={image4}
      alt=""
      width={500}
      height={500}
    />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Electronics</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div></SwiperSlide>
      
    </Swiper>

   
  </>
  )
}

export default TopBanner