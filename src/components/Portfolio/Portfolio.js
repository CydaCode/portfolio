import React from 'react';
import './Portfolio.css';
import fylo from '../../assets/fylo.png';
import resto from '../../assets/resto.jpg';
import portfo from '../../assets/portfolio.jpg';




// Data details

const data = [
  {
    id: 1,
    image: fylo,
    title: 'Fylo Landing Page',
    details: 'HTML, CSS',
    github: 'https://github.com/CydaCode/fylos.git',
    demo: 'https://poetic-licorice-9afdeb.netlify.app/',
  },
  {
    id: 2,
    image: resto,
    title: 'RestoFOOD Resturant',
    details: 'HTML, CSS, ReactJs',
    github: 'https://github.com/CydaCode/fylos.git',
    demo: 'https://poetic-licorice-9afdeb.netlify.app/',
  },
  {
    id: 3,
    image: portfo,
    title: 'My Portfolio',
    details: 'HTML, CSS, ReactJs',
    github: 'https://github.com/CydaCode/fylos.git',
    demo: 'https://poetic-licorice-9afdeb.netlify.app/',
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        {
          data.map(({id, image, title, details, github, demo}) => {
            return <article key={id} className='portfolio-item'>
            <div className='portfolio-item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <small className='text-dark'>{details}</small>
            <div className='portfolio-item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          })
        }
      </div>
    </section>
  )
}

export default Portfolio