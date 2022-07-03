import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {MdWavingHand} from 'react-icons/md'

const Header = () => {
  return (
    <header>
      <div className='header-bg'>
        <div className='header-overlay'>
          <div className='container header_container '>
            <div className='lo'>
                <div className='lo1'>
                    <h2 >Hi, <MdWavingHand className='ho' /> My name is</h2>
                    <h1>Cynthia Nwankwo</h1>
                    <h2 className='ho'>Frontend Web Developer</h2>
                   <div className='li'>
                    <small >I'm  specialized in building (and occasionally designing) 
                      exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products 
                      and responsive web pages</small>
                   </div>
                    <CTA />
                    <HeaderSocials />
                </div>

            </div>
            
            <a href='#contact' className='scroll-down'>Scroll Down</a>

            
          </div> 
        </div>
      </div>
    </header>
  )
}

export default Header