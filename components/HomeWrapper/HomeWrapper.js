import React from 'react'
import Footer from '../Footer/Footer'
import BottonNavbar from '../Navbar/BottonNavbar'
import Navbar from '../Navbar/Navbar'
import NewArival from '../NewArival/NewArival'
import TopBanner from '../TopBanner/TopBanner'


const HomeWrapper = () => {
  return (
    <>
     
    <Navbar/>
    <BottonNavbar/>
 <TopBanner/>
 <NewArival/>
    
    <Footer/>

    </>
  )
}

export default HomeWrapper