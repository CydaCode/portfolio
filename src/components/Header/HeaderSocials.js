import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/cynthia-nwankwo-b8b54a190' target='_blank'> <BsLinkedin /></a>
        <a href='https://github.com/CydaCode' target='_blank'> <FaGithubSquare /></a>
        <a href='https://twitter.com/tia_code?s=09' target='_blank'> <FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocials