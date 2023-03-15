import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import Image from 'next/image';
import img1 from '../../public/assets/Cards/1.png';
import img2 from '../../public/assets/Cards/2.png';
import img3 from '../../public/assets/Cards/3.png';
import img4 from '../../public/assets/Cards/4.png';
import foeterimage from '../../public/assets/Cards/Vector 1.png'

const Footer = () => {
  return (
    <div><footer
    className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left footer-bg ">
    
    <div className="py-10 container mx-auto  ">
      <div className="grid-1 grid gap-1 md:grid-cols-2 lg:grid-cols-4">
                      <div className='text-white'>  

                      <div className='flex item-center justify-center md:justify-start gap-2 mb-2'>
                        <Image
    
    src={foeterimage}
    objectFit="contain"
    alt=""
    width={70}
    height={30}
  /><p className='text-[20px] mb-[21px] text-[#00CAD7]'> store</p>
                        </div>  
                       
                         
                        <div> <p className='text-lg text-[#00CAD7]'>Got questions? Call us 24/7!</p>
                      <div className='py-[14px]'>
                      <p>03 111 666 144</p>
                            <p>0317 1777015.</p>
                      </div>
                      <div className='pb-[14px]'>
                      <p className='text-[15px] text-[#00CAD7]'>Contact info</p>
                            <p className='text-[13px] text-white mb-[14px]'>info@winstore.pk</p>
                      </div>
                      <div className='flex items-center gap-[24px] justify-center lg:justify-start '>
                      <FaFacebookF className='text-[20px]'></FaFacebookF>
                            <BsTwitter className='text-[20px]'></BsTwitter>
                            <FaLinkedinIn className='text-[20px]'></FaLinkedinIn>
                            <GrInstagram className='text-[20px]'></GrInstagram>
                      </div>
                        </div>
                    </div>
                      
                    <div className=' text-white'>
                        <p className='text-[20px] mb-[21px] text-[#00CAD7]'>Trending</p>
                        <p className='text-[13px] mb-3'>Installments</p>
                        <p className='text-[13px] mb-3'>Electronics</p>
                        <p className='text-[13px] mb-3'>Grocery</p>
                        <p className='text-[13px] mb-3'>Health & Beauty</p>
                        <p className='text-[13px] mb-3'>Home Appliances</p>
                        <p className='text-[13px] mb-3'>Mobile Accessories</p>
                    </div>
                    <div className=' text-white flex flex-col justify-start'>
                        <p className='text-[20px] mb-[21px] text-[#00CAD7]'>Information</p>
                        <p className='text-[13px] mb-3'>About Us</p>
                        <p className='text-[13px] mb-3'>Contact Us</p>
                        <p className='text-[13px] mb-3'>FAQs</p>
                        <p className='text-[13px] mb-3'>Shipping & Return</p>
                        <p className='text-[13px] mb-3'>Privacy policy</p>
                        <p className='text-[13px] mb-3'>Terms & Conditions</p>
                    </div>
                    <div className=' text-white flex flex-col justify-start'>
                        <p className='text-[20px] mb-[21px] text-[#00CAD7]'>Customer Care</p>
                        <p className='text-[13px] mb-3'>My Account</p>
                        <p className='text-[13px] mb-3'>Track Your Order</p>
                        <p className='text-[13px] mb-3'>Recently Viewed</p>
                        <p className='text-[13px] mb-3'>Wishlist</p>
                        <p className='text-[13px] mb-3'>Compare</p>
                        <p className='text-[13px] mb-3'>Become a Vendor</p>
                    </div>
      </div>
      <div className='h-[55px] flex justify-end gap-[11px] mt-[35px]'>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                    
                        <Image
    
      src={img1}
      alt=""
      width={500}
      height={500}
    />
                        
                    
                    </div>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                    
                        <Image
    
    src={img2}
    alt=""
    width={500}
    height={500}
  />
                    </div>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                      
                        <Image
    
    src={img3}
    alt=""
    
    width={80}
    height={50}
  />
                          
                    </div>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                    
                        <Image
    
    src={img4}
    alt=""
    width={500}
    height={500}
  />
                    
                    </div>
                </div>
    </div>
    <div className='py-10 bg-[#161616] text-center lg:text-start lg:pl-[180px]'>
                <h1 className='pt-[21px] text-[18px] text-white '>© 2021 Winstore. All Rights Reserved.</h1>
            </div>
  </footer></div>
  )
}

export default Footer