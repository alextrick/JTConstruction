import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';
import { Fade } from 'react-reveal';

import PhoneButton from '../components/phone-button';

const ContactForm = ({ data }) => {

    const handleClick = () => {
      const form = document.querySelector("form");
      form.submit();
      form.reset();
      return false;
    };
  
    return (
      <div className="section contact">
        <ScrollableAnchor id={"contact"}>
          <h3 className="title">Contact</h3>
        </ScrollableAnchor>
        <p>
        If you'd like to get a quote, discuss a project or have any questions, please don't hesitate to get in touch below:
        </p>
        <hr />
        <form name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
            <input name="name" type="text" placeholder="Name *" required/>
            <input name="email" type="email" placeholder="Email *" required />
            <input name="phone" type="number" placeholder="Phone" />
            <textarea name="message" rows="12" placeholder="Please give some details about your project. *" required />
            <button type="submit" value="Contact Now" className="btn">Contact Now</button>
        </form>
        <ul className="contact-phone">
          <li>Alternatively, contact via phone: </li>
          <PhoneButton />
        </ul>
        
      </div>
    );
}

export default ContactForm;