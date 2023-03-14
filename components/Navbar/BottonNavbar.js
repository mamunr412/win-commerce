import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const BottonNavbar = () => {
  return (
    <div className='bg-[#0E3B3E] px-[51px] h-[59px] text-white flex items-center justify-between'>
    <div className='flex items-center gap-[36px]'>
        <div className='flex items-center gap-3 text-[17px]'>
            <GiHamburgerMenu></GiHamburgerMenu>
            <h1>Brouse By Category</h1>
        </div>
        <h1 className='text-[13px]'>Home</h1>
        <h1 className='text-[13px]'>Easy Monthly Installments</h1>
        <h1 className='text-[13px]'>Shop by Brands</h1>
        <h1 className='text-[13px]'>Become a Vendor</h1>
    </div>
    <div className='flex items-center gap-[24px] text-white'>
        <FaFacebookF className='text-[20px]'></FaFacebookF>
        <BsTwitter className='text-[20px]'></BsTwitter>
        <FaLinkedinIn className='text-[20px]'></FaLinkedinIn>
        <GrInstagram className='text-[20px]'></GrInstagram>
    </div>
</div>
  )
}

export default BottonNavbar