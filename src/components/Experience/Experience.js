import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';

const Experience = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <section id='experience' data-aos='fade-up'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container ' >
        <div className='experience-frontend' data-aos='fade-up'>
         <h3>Frontend Development</h3>
         <div className='experience-content'>
            <article  className='experience-details'>
                <BsPatchCheckFill className='experience-details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-dark'>Experienced</small>
                </div>
            </article>

            <article className='experience-details'>
                <BsPatchCheckFill className='experience-details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-dark'>Intermediate</small>
                </div>
            </article>

            <article className='experience-details'>
                <BsPatchCheckFill className='experience-details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-dark'>Intermediate</small>
                </div>
            </article>

            <article className='experience-details'>
                <BsPatchCheckFill className='experience-details-icon'/>
                <div>
                  <h4>React-Js</h4>
                  <small className='text-dark'>Intermediate</small>
                </div>
            </article>

            <article className='experience-details'>
                <BsPatchCheckFill className='experience-details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-dark'>Intermediate</small>
                </div>
            </article>

            <article className='experience-details'>
                <BsPatchCheckFill className='experience-details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-dark'>Experienced</small>
                </div>
            </article>

         </div>
        </div>
        {/* End of frontend */}

        {/* Start of graphics */}
        <div className='experience-graphics' data-aos='fade-up'>
          <h3>Product/Graphic Designs</h3>
          <div className='experience-content'>
              <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>Figma</h4>
                    <small className='text-dark'>Intermediate</small>
                  </div>
              </article>

              <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>Adobe Illustrator</h4>
                    <small className='text-dark'>Experienced</small>
                  </div>
              </article>

              <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>Adobe Photoshop</h4>
                    <small className='text-dark'>Intermediate</small>
                  </div>
              </article>

          </div>
        </div>
      </div>

    
    </section>
  )
}

export default Experience