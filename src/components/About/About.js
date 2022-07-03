import React from 'react'
import './About.css'
import Me2 from '../../assets/me2.png'


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
          Cynthia Nwankwo is a Meticulous Software Developer, 
          who is driven with passion to contribute in the software 
          technology sector and profer solutions. She is a graduate 
          of Chemistry in Federal University of Technology Minna, Nigeria.. 
          I am Currently a volunteer as the Learning Manager for 
          <span className='ho'>Techathon Mentorship and OpenSource</span>, 
          where we help newbies transform properly into the tech world. 
          I am an entry level developer at <a href='https://tiidelab.com/'>
          TIIDELab Fellowship</a> where I am working with a group of talented 
          individauls to build amazing projects.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About