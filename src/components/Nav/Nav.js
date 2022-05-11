import React, {useState} from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {MdOutlinePermContactCalendar} from 'react-icons/md'


const Nav = () => {
    const[activePage, setActivePage] = useState('#')


  return (
    <nav id='nav'>
        <a href='#' onClick={() =>  setActivePage('#')} className={activePage === '#'? 'active' : ''}><AiOutlineHome /></a>
        <a href='#about' onClick={() => setActivePage('#about')} className={activePage === '#about'? 'active' : ''}><BiUser /></a>
        <a href='#experience' onClick={() => setActivePage('#experience')} className={activePage === '#experience'? 'active' : ''}><BiBookAlt /></a>
        <a href='#services' onClick={() => setActivePage('#services')} className={activePage === '#services'? 'active' : ''}><RiServiceFill /></a>
        <a href='#contact' onClick={() => setActivePage('#contact')} className={activePage === '#contact'? 'active' : ''}><MdOutlinePermContactCalendar /></a>
    </nav>
  )
}

export default Nav