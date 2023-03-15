import React, {  useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


// 
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
    <div className="-pt[10px]">
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
               
            </div></SwiperSlide>
        
      </Swiper>
    </div>

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