import React, { useEffect,  useState } from 'react';
import Logo from '../Components/img/logo.png';
import './Menu.css';
import { FaDelicious, FaShoppingCart, FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from "react-icons/fa";

function Menu() {

  useEffect(()=>{
    const mainMenuLi = document.getElementById('mainmenu').querySelectorAll('li');
    const changeActive = () => {
      mainMenuLi.forEach(n=>n.classList.remove('active'))
      this.classList.add('active');
    };
    mainMenuLi.forEach(n=>n.addEventListener('click', changeActive));
  },[]);

  return (
    <div className="menu">
      <img src={Logo} alt='logo image' />
      <ul id='mainmenu'>
        <Icon icon={<FaDelicious />}/>
        <Icon icon={<FaShoppingCart />}/>
        <Icon icon={<FaWallet />}/>
        <Icon icon={<FaChartLine />}/>
        <Icon icon={<FaRegClock />}/>
      </ul>

      <ul className='lastMenu'>
        <Icon icon={<FaCog />}/>
        <Icon icon={<FaSignOutAlt />}/>
      </ul>

    </div>
  )
}

const Icon = ({ icon }) => {
  return(
    <li>
      <a href="#">{icon}</a>
    </li>
  )
}

export default Menu;