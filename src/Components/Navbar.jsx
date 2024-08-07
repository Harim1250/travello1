import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import MenuItems from './MenuItems';
import logo from '../assets/Logo.png';
import { useAuth0 } from "@auth0/auth0-react";
import { useDarkMode } from '../Components/DarkModeContext';
import './DarkModeContext.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleClick = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <nav className='Navbar-items'>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='menu-Bar' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? 'Navbar-menu active' : 'Navbar-menu'}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} className={item.cName}>
                            <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                ))}

                {isAuthenticated && (
                    <li>
                        <p>{user.name}</p>
                    </li>
                )}

                <li>
                    {isAuthenticated ? (
                        <button
                            className="Sign-Button"
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        >
                            <p>Log Out</p>
                        </button>
                    ) : (
                        <button className="Sign-Button" onClick={loginWithRedirect}>
                            Log In
                        </button>
                    )}

<button onClick={toggleDarkMode} className='moon'>
                        <i className="fa-solid fa-moon"></i>
                    </button>
                </li>
                
                <li>
                   
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
