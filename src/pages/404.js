import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div className="section">
    <h1>PAGE NOT FOUND</h1>
    <p>Sorry, there doesn't seem to be anything here! Click <Link to="/"><strong>here</strong></Link> to return to the homepage.</p>
  </div>
)

export default NotFoundPage
