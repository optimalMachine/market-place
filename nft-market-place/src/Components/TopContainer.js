import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pho from '../Components/img/profilepic.jpg';

function TopContainer() {

    useEffect(()=>{
        const menuTarget = document.getElementById('menu-chevron-icon');
        const menuContainer = document.getElementById('menuContainer');
        
        menuTarget.addEventListener('mouseenter',()=>{
            menuTarget.style.transform = 'rotate(0deg)';
            menuContainer.style.transform = 'translateX(0px)';

        })
        menuContainer.addEventListener('mouseleave',()=>{
            menuTarget.style.transform = 'rotate(180deg)';
            menuContainer.style.transform = 'translateX(300px)';
        })
    },[]);

    return (
        <div className='topContainer'>
            <div className='inputBox'>
                <input type='text' placeholder='Search item, collections'></input>
                <i><BiSearchAlt /></i>
            </div>
            <div className="profileContainer">
                <i className= 'profileIcon'>
                    <IconButton className='menu-iconbutton'><NotificationsIcon className="menu-bell-icon"/></IconButton>
                </i>
                <div className='profileImage'>
                    <Avatar className='avatar' alt="Jiuk Choi" src={Pho} />
                </div>
                <p className="profileName">Jiuk Choi</p>
                <i className='menuChevron' id='menuChevron'>
                    <IconButton className='menu-iconbutton'><ExpandMoreIcon className='menu-chevron-icon' id='menu-chevron-icon'/></IconButton>
                </i>

                <div className='menuContainer' id='menuContainer'>
                    <ul>
                        <li>Web Design</li>
                        <li>UI / UX</li>
                        <li>Form Design</li>
                        <li>UI Design</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default TopContainer;