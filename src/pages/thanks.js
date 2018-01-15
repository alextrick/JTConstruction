import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div className="section">
    <h1>Contact Form Submitted!</h1>
    <p>Thank you for contacting. I'll be in touch as soon as possible to discuss further!</p>
    <p>Click <Link to="/"><strong>here</strong></Link> to return to the homepage.</p>
  </div>
)

export default NotFoundPage
