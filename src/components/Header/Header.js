import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/cyntrans.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
     <div className='container header_container '>
         <div className='lo'>
            <div className='lo1'>
                <h5>Hello I'm</h5>
                <h1>Cynthia Nwankwo</h1>
                <h5 className='text-dark'>Frontend Web Developer</h5>
                <CTA />
                <HeaderSocials />
            </div>
            <div className='me'>
                <img src={ME}/>
            </div>

         </div>
        
        <a href='#contact' className='scroll-down'>Scroll Down</a>

        
    </div>   

    </header>
  )
}

export default Header