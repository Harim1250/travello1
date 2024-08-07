import React, { useState } from 'react';
import './Herostyle.css';

function Hero(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState({});

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSubDropdown = (index) => {
    setSubDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <>
      <div className={props.cName}>
        <div className="video-container">
          <video src={props.Herovideo} autoPlay loop muted className='video-class'></video>
        </div>

        <div className='hero-text'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="dropdown">
            <button className={props.btnClass} onClick={toggleDropdown}>
              {props.buttontext} <i className="fas fa-chevron-down"></i>
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                {props.dropdownItems.map((item, index) => (
                  <div key={index} className="dropdown-item-container">
                    <a href={item.url} className="dropdown-item" onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        toggleSubDropdown(index);
                      }
                    }}>
                      {item.label} {item.subItems && <i className="fas fa-chevron-down"></i>}
                    </a>
                    {item.subItems && subDropdownOpen[index] && (
                      <div className="sub-dropdown-content">
                        {item.subItems.map((subItem, subIndex) => (
                          <a key={subIndex} href={subItem.url} className="sub-dropdown-item">
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
