import React from 'react';
import './Servicess.css';
import servicephoto from '../assets/mapabout.jpg';




function Servicess() {
  return (
    <>
    <div className='first-service'>
       <div className='Serviceimg'>
           <img src={servicephoto}alt="Serviceimages" />
       </div>

        <div className='Servicessdesci'>
          <h1>Search Cheap Flights And Flight Deals</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, molestias.</p>
        </div>

      <div className='ourservices'>
        
      </div>
    </div>
    </>
  )
}

export default Servicess;