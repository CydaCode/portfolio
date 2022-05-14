import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer-logo'>TiaCode</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://facebook.com'><FaFacebookSquare /></a>
        <a href='https://instagram.com'><GrInstagram ></GrInstagram></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; TiaCode. All rights reserved</small>
      </div>
    </footer>

  )
}

export default Footer