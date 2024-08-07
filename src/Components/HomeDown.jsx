import React from 'react';
import './HomeDown.css';
import homepageimg1 from '../assets/india1.jpg';
import homepageimg2 from '../assets/Europe1.jpg';
import homepageimg3 from '../assets/Chinaabout.jpg';
import homepageimg4 from '../assets/indonesia.jpg';

function HomeDown() {
  return (
    <div className="homeheading">
      <div className='heading'>
        <h1>POPULAR DESTINATION</h1>
      </div>
      
      <div className="content">
        <div className="subheading">
          <h3>ASIA CONITNENT</h3>
          <p>Whether you're backpacking South  Asia, heading to Japan for cherry blossom season or hiking the peaks of Nepal, a trip to Asia is truly a sensory experience. Covering almost one entire face of the globe, it’s a hugely diverse continent full of contrasts. On the one hand there’s the seemingly boundless technological advances of Tokyo, Singapore, China. But, walk through the green rice paddies of Indonesia and you’ll feel like you’ve been transported back in time to a slower, calmer way of life.</p>
        </div>

        <div className='homeimages'>
          <img src={homepageimg1} alt="homeimg1" />
          <img src={homepageimg2} alt="homeimg2" />
        </div>
      </div>

      <div className="content reverse">
        <div className="subheading">
          <h3>EUROPE CONITNENT</h3>
          <p>Whether you're backpacking Europe  Asia, heading to Japan for cherry blossom season or hiking the peaks of UK, a trip to Europe is truly a sensory experience. Covering almost one entire face of the globe, it’s a hugely diverse continent full of contrasts. On the one hand there’s the seemingly boundless technological advances of London, Germeny, itelt. But, walk through the green rice paddies of Indonesia and you’ll feel like you’ve been transported back in time to a slower, calmer way of life.</p>
        </div>

        <div className='homeimages'>
          <img src={homepageimg3} alt="homeimg1" />
          <img src={homepageimg4} alt="homeimg2" />
        </div>
      </div>
      
    </div>
  );
}

export default HomeDown;
