import React from 'react'
import './About.css'
import Me2 from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me </h2>

      <div className=' container about-container'>
        <div className='about-me'>
          <div className='about-me-image'> 
            <img src={Me2}/>
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>2+ Years Work</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about-card'>
              <AiOutlineFolderOpen className='about-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing
            elit. Possimus commodi nobis
            non voluptates esse vero 
            laudantium quibusdam odit 
            voluptatum a iste natus, 
            voluptatibus exercitationem 
            ducimus mollitia minima ut
            expedita omnis.
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing
            elit. Possimus commodi nobis
            non voluptates esse vero 
            laudantium quibusdam odit 
            voluptatum a iste natus, 
            voluptatibus exercitationem 
            ducimus mollitia minima ut
            expedita omnis.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About