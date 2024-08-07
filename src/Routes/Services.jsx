import React from 'react'
import Navbar from '../Components/Navbar';
import Servicess from '../Components/Servicess'
import Foother from '../Components/Foother';
import HomeSlider from '../Components/HomeSlider';
import Servicefourimages from '../Components/Servicefourimages';

// import HomeSlider from '../Components/HomeSlider';

function Services() {
  return (
    <>
   <Navbar />
   <Servicess/>
    <HomeSlider/>
    <Servicefourimages/>
    <Foother/>
  
   
   
      {/* <Hero
        cName = "service-section"
        // Herovideo = {Aboutvideo}
        title = "Services"
        // text = "Choose your right destination"
        // buttontext = "Travel Plain"
        // url ="/"
        // btnClass = "hide"

      

      /> */}
      
     
    </>
  )
}

export default Services