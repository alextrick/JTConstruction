import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import "./normalize.css";
import './index.css';

const Header = () => (
  <div className="header">
    <h2><Link to="/" >Joseph Thomas Construction</Link></h2>
    <nav>
        <li><Link to="#" >Gallery</Link></li>
        <li><Link to="#" >About</Link></li>
        <li><Link to="#" >Contact</Link></li>
    </nav>
  </div>
)

const Footer = () => (
  <div className="footer">
    <p>Joe Thomas Construction</p>
    <ul>
      <li><Link to="#"><i className="fa fa-twitter-square fa-2x">T</i></Link></li>
      <li><Link to="#"><i className="fa fa-facebook-square fa-2x">F</i></Link></li>
      <li><Link to="#"><i className="fa fa-snapchat-square fa-2x">I</i></Link></li>
    </ul>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joe Thomas Construction"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
    <Header />
    <div className="container">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
