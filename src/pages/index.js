import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Services from "../components/services";
import IndexGallery from "../components/index-gallery";
import ContactForm from "../components/contact-form";

import Script from "react-load-script";


import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({scrollDuration: 600});

const IndexPage = ({ data }) =>  {

  function handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }
    
  return (
    <div>
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => handleScriptLoad()}
      />
      <div className="section hero-content-area">
        <div className="hero">
          <Img className="hero-banner" sizes={data.kitchImage.sizes} />
          <div className="hero-info">
            <h1>Blah blah Blah</h1>
            <h3>Lorem ipsum dolor sit amet, eu atomorum salutandi reformidans vix, ex magna malorum usu, legere platonem consequat eu qui. Libris gloriatur ius cu, no sit lorem repudiare cotidieque. Nam in virtute officiis platonem. In sed invenire deseruisse. Id vim quidam sapientem reprehendunt, eum ut ancillae molestie incorrupte.</h3>
            <Link to="#" className="btn">Contact Now</Link>
          </div>
        </div>
      </div>

      {/* <a name="services" /> */}
      <Services />
  
      
      <IndexGallery data={data}/>

      
      <ContactForm />
    </div>
  )
}


export default IndexPage



export const query = graphql`
  query PageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            thumbnail
            path
            title
          }
        }
      }
    }
    kitchImage: imageSharp(id: { regex: "/kitchen/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galOne: imageSharp(id: { regex: "/one/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galTwo: imageSharp(id: { regex: "/two/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galThree: imageSharp(id: { regex: "/three/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galFour: imageSharp(id: { regex: "/four/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;