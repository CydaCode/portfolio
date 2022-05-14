import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className='container service-container'>
        <article className='service'>
          <div className='service-head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className='service'>
          <div className='service-head'>
            <h3>UI/UX</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* End of uiux */}

        <article className='service'>
          <div className='service-head'>
            <h3>Graphics Design</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* End of graphics */}
      </div>
    </section>
  )
}

export default Services