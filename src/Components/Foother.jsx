import React from 'react';
import './FootherStyle.css';

function Foother() {
  return (
    <div className='foother'>
      <div className='top-foother'>
        <div>
          <h1>Travello</h1>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid?</p>
        <div>
          <a href="https://www.linkedin.com/in/hariom-yadav-18458625a/">
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href="https://www.instagram.com/dev_hariom_88820/">
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href="https://www.linkedin.com/in/hariom-yadav-18458625a/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/Hariom45976">
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <div className='bottom-foother'>
        <div>
          <h4>Our Products</h4>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Domestic Hotels</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> International Hotels</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Domestic Flights</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> International Flights</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Multi-City Flights</a>
        </div>
        <div>
          <h4>About Us</h4>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> About Us</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Investor Relations</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Management</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Terms of Services</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> User Agreement</a>
        </div>
        <div>
          <h4>Tours Packs</h4>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Tourism in Asia</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Tourism in North America</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Tourism in Europe</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Tourism in Africa</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Tourism in the Arab countries</a>
        </div>
        <div>
          <h4>Many More</h4>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Cheap Flights</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> Hotels Near Me</a>
          <a href="/"> <i className="fa-solid fa-circle-arrow-right"></i> My Bookings</a>
          
        </div>
      </div>
      <h5>Design And Created By @ Hariom</h5>
    </div>
  );
}

export default Foother;
