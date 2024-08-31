import React from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import HomeDown from '../Components/HomeDown';
import HomeSlider from '../Components/HomeSlider';
import FourHome from '../Components/FourHome';
import Foother from '../Components/Foother';
// import Chatbot from '../Components/chatbot';

function Home() {
  const dropdownItems = [
    { url: '/', label: 'HOLIDAYS-BOOKING', subItems: [{ url: 'https://www.makemytrip.com/', label: 'Make-My-Trip' }] },
    { url: '/', label: 'TRAINS', subItems: [{ url: 'https://www.irctc.co.in/nget/train-search', label: 'IRCTC' }] },
    { url: '/', label: 'BUSES', subItems: [{ url: 'https://www.redbus.in/', label: 'RED-BUSES' }] },
    { url: '/', label: 'FLIGHTS', subItems: [{ url: 'https://www.goibibo.com/flights/', label: 'GOIBIBO' }] },
    { url: '', label: 'RIDES', subItems: [{ url: 'https://www.uber.com/in/en/', label: 'UBER' }] }
  ];

  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        title="YOUR JOURNEY OUR SUGGESTION"
        text="'Choose your right destination'"
        buttontext="PLAN YOUR DESTINATION"
        url="/"
        btnClass="show"
        dropdownItems={dropdownItems}
        videoLink="https://videos.pexels.com/video-files/4205697/4205697-uhd_2560_1440_30fps.mp4"  // Example YouTube video link
      />
      {/* <Chatbot/> */}
      <HomeDown />
      <HomeSlider />
      <FourHome />
      <Foother />
    </>
  );
}

export default Home;
