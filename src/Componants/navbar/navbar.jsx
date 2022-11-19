import React from 'react'
import './navbar.scss'
import {Search, Notifications, ArrowDropDown} from '@mui/icons-material';
import { useState } from 'react';
     
    const NavBar = () => {
        const [isStated, setIsScrolled] = useState(false);
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null)
        }
        return (
            <div className={isStated ? "navbar scrolled" : "navbar"}>
                <div className="container">
                    <div className="left">
                        <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
                        alt="Netflix logo"/>
                        <span>Home Page</span>
                        <span>Series</span>
                        <span>Movies</span>
                        <span>New and populer</span>
                        <span>my list</span>
                    </div>
                    <div className="right">
                        <Search className='icon'/>
                        <span>KID</span>
                        <Notifications/>
                        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"alt="Profile pic"/>
                        <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>LogOut</span>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        );
    

        }
        export default NavBar
