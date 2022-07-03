import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {FaWhatsapp} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ywc26q', 'template_147smri', form.current, '4UlZgOr19XvLROOKk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact' data-aos='fade-up'>
      <h5 data-aos='fade-up'>Get In Touch</h5>
      <h2 data-aos='fade-up'>Contact Me</h2>

      <div className='container contact-container' data-aos='fade-up'>
        <div className='contact-options'>
          <article className='contact-option' data-aos='fade-up'>
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>nwacynti25@gmail.com</h5>
            <a href='mailto:nwacynti25@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact-option' data-aos='fade-up'>
            <RiMessengerLine className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Cy Tilda</h5>
            <a href='https://m.me/cynthia.nwankwo.161' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact-option'>
            <FaWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348162222284</h5>
            <a href='https://api.whatsapp.com/send?phone=+2348162222284' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End f contact option */}

        {/* Beginnning of contact form */}
        <form ref={form} onSubmit={sendEmail} data-aos='fade-up'>
          <input type='text' placeholder='Your Full Name' name='name' required/>
          <input type='email' placeholder='Your Email' name='email'/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact