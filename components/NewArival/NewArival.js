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
            <div className=' grid-1 grid gap-2  md:grid-cols-2 lg:grid-cols-4  '>
            {products.map((sProduct)=>{
             
                return  <div className='border-[1px] ' key={sProduct.id}>
                    <div className='p-4'>
                       <Link href={`/product/${sProduct.id}`} >
                          <div>
                            < p className='text-[12px]'>{sProduct.category}</p>
                            <p className='text-[15px]  pt-2'>{sProduct.title}</p>
                            
                          <div className='pt-2 pl-10' >
                            <img src={sProduct.image} alt='' className='card-image'></img>
                  
                          </div>
                          
                          <div className='flex items-center justify-center gap-[8px] my-[11px]'>
                              <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                              <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                          </div>
                          </div>
                          </Link>
                          <div className='text-center'>
                            <button className=' px-[100px] h-[35px] bg-[#15ADB7] text-[15px] text-white  mb-3'>
                              Add to cart
                          </button>
                            </div>
                    </div>

                  </div>
                  {/* <div className='border-[1px] p-5'>
               
                        
                            
          
                          
             </div> */}
          
                
              
                
                
            }  )}
            </div>
          
            
        </div>
  )
}

export default NewArival

