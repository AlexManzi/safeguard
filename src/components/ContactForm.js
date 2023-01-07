import React, { useState } from 'react'
import './ContactForm.css';

const FORM_ENDPOINT = "";

function ContactForm() {

  const [submitted, setSubmitted] = useState(false);
    function handleSubmit() {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    }

    if (submitted) {
      return (
        <div>
          <h2>Thank you!</h2>
          <h3>We'll be in touch soon.</h3>
        </div>
      )
    }


  return (
    <div id="contactForm">
        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target='_blank'>
        <div id="topDivForm">
          <div>
            <input className='contactEntry' type="text" placeholder='Your Name' name='name' required />
          </div>
          <div id="contactPieces">
          <div>
            <input className='contactEntry' type="email" placeholder='Your Email' name="email" required />
          </div>
          <div>
            <input className='contactEntry' type="tel" placeholder='Your Phone Number' name="number" required />
          </div>
          </div>
          <div>
            <textarea id="messageEntry" placeholder="Your message" name="message" required />
          </div>
          <div>
            <button id="sendMessage" type="submit"> Send Message </button>
          </div>
          </div>
        </form>
    </div> 
  )
}

export default ContactForm