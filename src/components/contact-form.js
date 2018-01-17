import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

const ContactForm = ({ data }) => {

    const handleClick = () => {
      const form = document.querySelector("form");
      form.submit();
      form.reset();
      return false;
    };
  
    return (
      <div className="section contact">
        <ScrollableAnchor id={"contact"}><h3 className="title">Contact</h3></ScrollableAnchor>
        <p>
            Illum dicam denique vix ut. Mei ullum appellantur ut, per id animal suscipit omittantur. 
            Ornatus percipit similique mei ne, ex vis dicit consulatu.
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
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" rows="10" placeholder="Please give some details about your project." required />
            <button type="submit" value="Contact Now" className="btn">Contact Now</button>
        </form>
      </div>
    );
}

export default ContactForm;