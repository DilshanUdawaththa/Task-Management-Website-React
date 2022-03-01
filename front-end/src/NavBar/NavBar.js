import React from 'react';
import { Link } from 'react-router-dom';
import nav_image from '../images/nav_image.jpg';

import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <img src={nav_image} alt="nav_image"></img>
            <div className='nav-links'>
                <ul>
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="about">About</Link></li>
                    <li><Link className='link' to="articles-list">Articles</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;