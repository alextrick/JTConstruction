import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import "./normalize.css";
import './index.css';
import './swiper.min.css';

import PhoneButton from '../components/phone-button';

import iconJTLogo from '../images/JTlogo.svg';
import iconContact from '../images/contact.svg';
import iconFacebook from '../images/facebook.svg';
import iconInstagram from '../images/instagram.svg';

// Burger menu


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Changes state when burger menu is clicked.
  handleClick() {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
  }

  render() {
    return (
      <div className="header">
        <Link to="/" ><img className={(this.state.isActive ? "header-logo-active" : null) + " header-logo"} src={iconJTLogo} /></Link>
        <div className="header-burger-menu" onClick={this.handleClick}>
            <div className={(this.state.isActive ? "header-burger-top-active" : null) + " header-burger-top"}></div>
            <div className={(this.state.isActive ? "header-burger-middle-active" : null) + " header-burger-top"}></div>
            <div className={(this.state.isActive ? "header-burger-bottom-active" : null) + " header-burger-top"}></div>
        </div>
        <nav className={this.state.isActive ? "nav-active" : null}>
            <li><a href="/#gallery" >Gallery</a></li>
            <li><a href="/#services" >Services</a></li>
            <li><a href="/#contact" >Contact</a></li>
            <PhoneButton />
        </nav>
      </div>
    )
  }
}

const Footer = () => (
  <div className="footer">
    <p>JT Construction</p>
    <ul>
      <li><Link to="/#contact"><img className="footer-icon" src={iconContact} alt="Contact" /></Link></li>
      <li><a href="https://www.facebook.com/josephthomasconstruction/"><img className="footer-icon" src={iconFacebook} alt="Facebook" /></a></li>
      <li><Link to="#"><img className="footer-icon" src={iconInstagram} alt="Instagram" /></Link></li>
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
      <link href="https://fonts.googleapis.com/css?family=Merriweather|Quicksand:500,700" rel="stylesheet" />
    </Helmet>
    <Header />
    <div className="container">
      {children()}
    </div>
    <Footer />
    {/* {document.querySelector(".header").addEventListener("click", () => alert("clicked"))} */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
