import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TopContainer() {
  return (
    <div className='topContainer'>
        <div className='inputBox'>
            <input type='text' placeholder='Search item, collections'></input>
            <i><BiSearchAlt /></i>
        </div>
        <div className="profileContainer">
            <i className= 'profileIcon'>
                <IconButton><NotificationsIcon /></IconButton>
            </i>
            <div className='profileImage'>
                <Avatar alt="Jiuk Choi" src='./Components/img/profilepic.jpg' />
            </div>
            <p className="profileName">Jiuk Choi</p>
            <i className='menuChevron' id='menuChevron'>
                <IconButton><ExpandMoreIcon /></IconButton>
            </i>
        </div>
    </div>
  )
}

export default TopContainer;