import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className='experience-frontend'>
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
        <div className='experience-graphics'>
          <h3>Prodcut/Graphic Designs</h3>
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