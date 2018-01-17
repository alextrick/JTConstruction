import React from "react";
import Img from "gatsby-image";

import { Fade } from 'react-reveal';

const Hero = ({ banner }) => {
    return (
    <div className="section hero-content-area">
        <Fade bottom delay={500}>
            <div className="hero">
              <Img className="hero-banner" sizes={banner} />
              <div className="hero-info">
                <h1>Blah blah Blah</h1>
                <h3>Lorem ipsum dolor sit amet, eu atomorum salutandi reformidans vix, ex magna malorum usu, legere platonem consequat eu qui. Libris gloriatur ius cu, no sit lorem repudiare cotidieque. Nam in virtute officiis platonem. In sed invenire deseruisse. Id vim quidam sapientem reprehendunt, eum ut ancillae molestie incorrupte.</h3>
                <a href="/#contact" className="btn">Contact Now</a>
              </div>
            </div>
        </Fade>
      </div>
    )
}

export default Hero;