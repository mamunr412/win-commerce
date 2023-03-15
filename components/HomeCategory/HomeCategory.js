import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useEffect } from 'react'
// import image1 from '../../public/assets/Deals/1.jfif';
// import image2 from '../../public/assets/Deals/2.jfif';
// import image3 from '../../public/assets/Deals/3.jfif';
// import image4 from '../../public/assets/Deals/4.jfif';
// import image5 from '../../public/assets/Deals/5.jfif';

const HomeCategory = () => {
   const [category, setCategory] = useState([]);
   const [categoryProduct,setCategoryproduct]=useState([])
   const[selectCategory,setSelectCategory]=useState('jewelery')
   const [loading,setLoading]=useState(false)
     useEffect(()=>{
try {
    fetch(`https://fakestoreapi.com/products/categories`).then(res=>res.json()).then(data=> setCategory(data)) 
} catch (error) {
   
}
     }, [])
     
     useEffect(()=>{
        setLoading(true)
        try {

            fetch(`https://fakestoreapi.com/products/category/${selectCategory}`)
            .then(res=>res.json())
            .then(data=>{
                if(data){
                   setCategoryproduct(data) 
                   setLoading(false)
                }else{
                       setLoading(false) 
                }
            })
           
        } catch (error) {
            setLoading(false)
        }
     }, [selectCategory])
  return (
    <div className='container mx-auto mt-10'>
            <div className='h-[59px] w-[1242px] flex items-center ml-20 mt-[41px] mb-7'>
                <div className='w-[380px]'>
                    <h1 className='text-[28px]'><span className='text-[#00CAD7]'>Best</span> Deals</h1>
                </div>
                <div className='flex gap-[11px] text-[19px]'>

                    {category.map(c=>{
                        return <p className={selectCategory===c?'text-[#00CAD7] ml-5 border-b-[3px] border-[#00CAD7] uppercase':' uppercase pl-5'} key={c} onClick={()=>setSelectCategory(c)}>{c}</p>
                    })}
                    
                
                </div>
            </div>
        
            <div className=' mb-[81px]  '>
                <div className=' grid-1 grid gap-2  md:grid-cols-2 lg:grid-cols-4 text-center'>

                    {loading? 
                        <div className='text-center'  >
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]  "
                            role="status">
                            <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span
                            >
                        </div>

                    </div>: <> {categoryProduct.map(sProduct=>{
                    return  <Link href={`/product/${sProduct.id}`}  key={sProduct.id}><div className=' p-[23px] border-[1px] flex  mr-3'  >
                        <div className='w-[200px]' >
                            <p className='text-[18px]'>{sProduct.title}</p>
                            <p className='text-[#14B1F0] text-[24px] pt-3'>Rs.{sProduct.price}</p>
                            <p className='text-[18px]'>Rs.<del>1,000</del></p>
                          
                           
                        </div>


                        <div >
                            <div  className='pb-2'>
                                <p className='text-xl text-center'> <span className='text-[#C82020]'>Special</span> <br /> Offer</p>
                            </div>
                            <div className='pe-2'>
                                 <img src={sProduct.image} alt='' className='category-product-image'></img>
            
                            </div>
                        </div>
                    </div></Link>
                    
                    
                    
                    
                })}</>}

                </div>
               
                
                
            </div>
        </div>
  )
}

export default HomeCategory