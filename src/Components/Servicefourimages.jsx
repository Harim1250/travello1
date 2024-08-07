import React from 'react'
import './Servicefourimages.css';
import servicephoto2 from '../assets/Bookservices.jpg';

function Servicefourimages() {
  return (
//     <div className='bookimages'>
//     <div className='imagesbook1'>
//       <img src={servicephoto2} alt="bookimages1" />
//     </div>

//     <div className='bookimagesdesci'>
//        <h1>BOOK YOUR NEXT TRIP</h1>
//        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, amet.</p>
//        <button>HAPPY BOOKING</button>
//     </div>
//    </div>

<div className='bookimages'>
       <div className='imagesbook1'>
           <img src={servicephoto2}alt="Serviceimages" />
       </div>

        <div className='bookimagesdesci'>
          <h1>Search Cheap Flights And Flight Deals</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, molestias.</p>

          <button>HAPPY BOOKING</button>
        </div>
    </div>
  )
}

export default Servicefourimages;