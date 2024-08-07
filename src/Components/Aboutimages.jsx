import React, { useRef, useState } from 'react'

import Aboutimagess from '../assets/aboutimage.jpg'
import './Aboutimages.css'
import aboutimages1 from '../assets/aboutComfort.jpg'
import aboutimages2 from '../assets/AboutHotel.jpg'
import aboutimages3 from '../assets/aboutgiude.jpg'
import Descimages1 from '../assets/indiaabout.jpg'
import Descimages2 from '../assets/Chinaabout.jpg'
import Descimages3 from '../assets/buthanabout.jpg'
import video from '../assets/ytvideo.mp4'

function Aboutimages() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
  
    const handleVideoClick = () => {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime);
    };
  
    const handleVideoLoaded = () => {
      setDuration(videoRef.current.duration);
    };
  
    const handleScrub = (e) => {
      const scrubTime = (e.target.value / 100) * duration;
      videoRef.current.currentTime = scrubTime;
      setCurrentTime(scrubTime);
    };

  return (
     <div className='aboutsection'>
        <div className='imgAbout'>
            <img src={Aboutimagess} alt="the-about-section" />
        </div>
        <div className='text-about'>
        <h1>EXPERIENCE YOURSELF</h1>
        <button>PLANE YOUR ADVANTURE</button>
        </div>

        <div className='about-desci'>
            <h2>Our Story</h2>
            <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                <br />
                <br />
            Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>

            <div className='imgdescription'>
            <img src={Descimages1} alt="Aboutimg1" />
            <img src={Descimages2} alt="Aboutimg2" />
            <img src={Descimages3} alt="Aboutimg3" />
           </div> 

        </div>

        <div  className='h2headimg'><h2>WHY CHOOSE TRAVELLO</h2></div>

        <div className='about-cart'>
            <div className='img-cart'>
            <img src={aboutimages1} alt="1" />
            <h1>Comfortable Journey</h1>
            <p>A wonderful serenity has taken to the possession of my entire soul.</p>
            </div>

            <div className='img-cart'>
            <img src={aboutimages2} alt="1" />
            <h1>Luxuries Hotel</h1>
            <p>A wonderful serenity has taken to the possession of my entire soul.</p>
            </div>

            <div className='img-cart'>
            <img src={aboutimages3} alt="1" />
            <h1>Travel Guide.</h1>
            <p>A wonderful serenity has taken to the possession of my entire soul.</p>
            </div>
        </div>

        <div className='about-video'>
      <div className='video-section'>
        <h1>FELL THE VIDEO</h1>
        <video
          src={video}
          ref={videoRef}
          onClick={handleVideoClick}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleVideoLoaded}
          loop
          muted={!isPlaying}
          className='your-video-class'
        ></video>
        <input
          type='range'
          min='0'
          max='100'
          value={(currentTime / duration) * 100 || 0}
          onChange={handleScrub}
          className='video-progress-bar'
        />
      </div>
    </div>

        
     
    </div>
  )
}

export default Aboutimages;