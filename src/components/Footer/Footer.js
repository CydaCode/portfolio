import React from 'react'
import './Footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {FiLinkedin} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#header' className='footer-logo' data-aos='fade-up'>TiaCode</a>


      <div className='footer-socials' data-aos='fade-up'>
        {/* <a href='https://web.facebook.com/cynthia.nwankwo.161/'><FaFacebookSquare /></a>
        <a href='https://instagram.com'><GrInstagram /></a> */}
        <a href='https://twitter.com/tia_code?s=09' target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
        <a href='https://www.linkedin.com/in/cynthia-nwankwo-b8b54a190' target='_blank' rel="noreferrer"><FiLinkedin /></a>
        <a href='https://github.com/CydaCode' target='_blank' rel="noreferrer"><BsGithub /></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; TiaCode. All rights reserved</small>
      </div>
    </footer>

  )
}

export default Footer