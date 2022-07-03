import React, {useState} from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {MdOutlinePermContactCalendar} from 'react-icons/md'


const Nav = () => {
    const[activePage, setActivePage] = useState('#header')


  return (
    <nav id='nav'>
        <a href='#header' onClick={() =>  setActivePage('#header')} className={activePage === '#header'? 'active' : ''}><AiOutlineHome /></a>
        <a href='#about' onClick={() => setActivePage('#about')} className={activePage === '#about'? 'active' : ''}><BiUser /></a>
        <a href='#experience' onClick={() => setActivePage('#experience')} className={activePage === '#experience'? 'active' : ''}><BiBookAlt /></a>
        <a href='#portfolio' onClick={() => setActivePage('#portfolio')} className={activePage === '#portfolio'? 'active' : ''}><RiServiceFill /></a>
        <a href='#contact' onClick={() => setActivePage('#contact')} className={activePage === '#contact'? 'active' : ''}><MdOutlinePermContactCalendar /></a>
    </nav>
  )
}

export default Nav