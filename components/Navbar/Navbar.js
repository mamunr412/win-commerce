import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch, BsHeart } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from 'next/image';
import foeterimage from '../../public/assets/Cards/Vector 1.png'
import Link from 'next/link';
const Navbar = () => {
  
  const [name, setProductName] = useState("");
  return (
    <div className='bg-[#03484D] h-[68px] px-[61px] flex items-center justify-between'>
            <div className='flex items-center gap-[41px]'>
                <Link href={'/'}> 
            <div className='flex item-center gap-2 mb-2'>
                <Image
    
    src={foeterimage}
    alt=""
    width={80}
    height={30}
  /><p className='text-[20px] mb-[21px] text-[#00CAD7]'> store</p>
                        </div> 
                        </Link>
                <div className='h-[39px] w-[534px] bg-white  rounded-md flex items-center'>
                    <div className='w-[157px] h-[39px] flex items-center justify-center 
                border-r-[1px]'>
                        <h1>All Categories</h1>
                        <IoIosArrowDown className='ml-[24px]'></IoIosArrowDown>
                    </div>
                    <div className='text-black w-[333.5px]'>
                        <form className='ml-[16.5px] w-full'>
                            <input
                                type="text"
                                placeholder='Search for products'
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className='h-[38px] w-[43px] bg-[#B6B6B6] rounded-r-[6px] flex justify-center items-center'>
                        <BsSearch className='text-[16px] text-white'></BsSearch>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[27px]'>
                <div className='w-[130px] flex flex-col text-white'>
                    <h1 className='text-xs'>Call us now</h1>
                    <div className='flex items-center gap-1'>
                        <FaHeadphones className='text-[20px]'></FaHeadphones>
                        <p className='text-sm'>+011 5827918</p>
                    </div>
                    <h1>Sign in</h1>
                </div>
                <div className='flex items-center text-white gap-[24px]'>
                    <FiUser className='text-2xl'></FiUser>
                    <BsHeart className='text-2xl'></BsHeart>
                    <div className='flex items-center gap-[3.5px] relative'>
                        <RiShoppingCartLine className='text-2xl'></RiShoppingCartLine>
                        <p>Cart</p>
                        <p className='absolute left-[14.29%] right-0 -top-4 text-[#FDDE3B]'>3</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar