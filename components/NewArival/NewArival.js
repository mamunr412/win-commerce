import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const NewArival = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
try {
    fetch(`https://fakestoreapi.com/products`).then(res=>res.json()).then(data=> setProducts(data.slice(0,10))) 
} catch (error) {
    
}

    },[])
  return (
    <div className='mb-4 container mx-auto' >
            <p className='text-[28px] mb-[23.5px] pl-[105px]'><span className='text-[#00CAD7]'>New</span>  Arrivals</p>
            <div className=' grid-1 grid gap-2  md:grid-cols-2 lg:grid-cols-4 '>
            {products.map((sProduct)=>{
             
                return   <Link href={`/product/${sProduct.id}`}  key={sProduct.id}><div className=' w-[320px] border-[1px] p-[14px]'>
               
                <p className='text-xs'>{sProduct.title}</p>
                 <h1 className='text-[15px]'>{sProduct.category}</h1>
               <div >
              <img src={sProduct.image} alt='' className='card-image'></img>
         
               </div>
 
                 <div className='flex items-center justify-center gap-[8px] my-[11px]'>
                     <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                     <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                 </div>
               <div className='text-center'>
               <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white '>
                     Add to cart
                 </button>
               </div>
             </div></Link>
                
              
                
                
            }  )}
            </div>
          
            
        </div>
  )
}

export default NewArival

