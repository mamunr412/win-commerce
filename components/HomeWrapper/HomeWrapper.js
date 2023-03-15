import React from 'react'
import Footer from '../Footer/Footer'
import HomeCategory from '../HomeCategory/HomeCategory'
import BottonNavbar from '../Navbar/BottonNavbar'
import Navbar from '../Navbar/Navbar'
import NewArival from '../NewArival/NewArival'
import TopBanner from '../TopBanner/TopBanner'


const HomeWrapper = () => {
  return (
    <>
     
    <Navbar/>
   <div className='hidden md:block '>
     <BottonNavbar />
   </div>
 <TopBanner/>
 <NewArival/>

 <HomeCategory/>
    
    <Footer/>

    </>
  )
}

export default HomeWrapper