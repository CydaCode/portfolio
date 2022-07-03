import React from 'react'
import './About.css'
import Me2 from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>

      

      <div className=' container about-container'>
        <div className='about-me' data-aos='fade-up'>
          <div className='about-me-image'> 
            <img src={Me2} alt=''/>
          </div>
        </div>

        
        <div className='about-content' data-aos='fade-up'>
        <h5 className='center'>Get To Know</h5>
        <h2 className='ho center'>About Me </h2>
          <p>
          Cynthia Nwankwo is a meticulous Front-End Web developer with
          experience, who has passion for responsive website design and a 
          firm believer in the mobile-first approach. I am Currently a volunteer as the Learning Manager for <span className='ho'>Techathon Mentorship and OpenSource</span>, where we help newbies transform properly into the tech world. 
          I am an entry level developer at <a href='https://tiidelab.com/'>TIIDELab Fellowship</a> where I am working with a group of talented individauls to build amazing projects.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About