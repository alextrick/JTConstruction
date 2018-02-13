import React from "react";
import Img from "gatsby-image";

const Hero = ({ banner }) => {
    return (
      <div className="section hero-content-area">
            <div className="hero">
              <Img className="hero-banner" sizes={banner} alt="An image of a kitchen" />
              <div className="hero-info">
                <h1>Joe Thomas Construction</h1>
                <h3>A passionate builder who takes pride in his work and loves what he does.</h3>
                <p>With a wide range of professional contacts to recommend throughout the process, JT Construction can come in at any stage of a building project and can help advise from start to finish.</p>
                <a href="/#contact" className="btn">Contact Now</a>
              </div>
            </div>
      </div>
    )
}

export default Hero;