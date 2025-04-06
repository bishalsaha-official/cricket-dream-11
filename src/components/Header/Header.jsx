import React from 'react';
import './Header.css'
import { BsCoin } from "react-icons/bs";
import logo from '../../assets/images/logo.png'


const Header = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="" />
            <div>
                <ul className='nav-item'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedule</a></li>
                    <li><button className='header-btn'>0 coin  <span className='icon'><BsCoin></BsCoin></span></button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;