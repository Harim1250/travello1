import React, { useRef, useState } from 'react';
import "./FourHome.css";
import { useAuth0 } from "@auth0/auth0-react";
import homevideo from '../assets/homevideo22.mp4';

function FourHome() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    videoRef.current.pause();
    setIsPlaying(false);
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
    <div className='fourthparth'>
      <div className='about-video'>
        <div className='video-section'>
          <h1>FEEL THE VIDEO</h1>
          <video
            src={homevideo}
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleVideoLoaded}
            loop
            muted={false}
            className='your-video-class'
          ></video>
          <div className="video-controls">
            <button onClick={handlePlayClick} disabled={isPlaying} className="play-button">
              Play
            </button>
            <button onClick={handlePauseClick} disabled={!isPlaying} className="pause-button">
              Pause
            </button>
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
      <div className='overlay'>
        <h2>“Live the journey, cherish the memories“</h2>
        <ul>
          {isAuthenticated && (
            <li>
              <p>{user.name}</p>
            </li>
          )}
          {isAuthenticated ? (
            <li>
              <button
                className="Sign-Button2"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="Sign-Button2" onClick={loginWithRedirect}>
                Sign up Your Dream
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FourHome;
