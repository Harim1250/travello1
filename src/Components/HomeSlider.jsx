import React from 'react';
import Recent1 from '../assets/india2.jpg';
import Recent2 from '../assets/nepal.jpg';
import Recent3 from '../assets/bhutan1.jpg';
import Recent4 from '../assets/maanali.jpg';
import Recent5 from '../assets/china.jpg';
import Recent6 from '../assets/Recent3.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/4 right-3 z-10 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center transform -translate-y-1/3 cursor-pointer"
      onClick={onClick}
    >
      <MdArrowForward className="text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/4 left-3 z-10 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center transform -translate-y-1/3 cursor-pointer"
      onClick={onClick}
    >
      <MdArrowBack className="text-white" />
    </div>
  );
}

function HomeSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='w-3/4 m-auto'>
      <div><h1 className='flex justify-center items-center text-5xl font-serif'>RECENT TRIPS</h1></div>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-[450px] text-black rounded-xl'>
              <div className='h-60 bg-white flex justify-center items-center'>
                <img src={d.img} alt="Slider image" className='h-60 w-80 rounded-xl bg-slate-900 shadow-lg shadow-indigo-500/50' />
              </div>

              {/* the text section */}
              <div className='flex flex-col items-center justify-center gap-5 py-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-indigo-500 text-white py-2 px-4 rounded-lg'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'INDIA',
    img: Recent1,
    review: '“We follow variety of traditions; each day for us is a day of celebration“'
  },
  {
    name: 'NEPAL',
    img: Recent2,
    review: "“Unleash Your Spirit of Adventure in Nepal“"
  },
  {
    name: 'BHUTAN',
    img: Recent3,
    review: "“high value, low volume with love and joyful”"
  },
  {
    name: 'MANALI',
    img: Recent4,
    review: "“Lost in the mountains, found in Manali”."
  },
  {
    name: 'CHINA',
    img: Recent5,
    review: "“Lorem ipsum, dolor sit amet consectetur“."
  },
  {
    name: 'ASIA',
    img: Recent6,
    review: "“Lorem ipsum, dolor sit amet consectetur“ ."
  }
];

export default HomeSlider;
