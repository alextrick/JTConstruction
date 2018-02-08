import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Hero from "../components/hero";
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
      
      <Hero banner={data.heroBanner.sizes}/>

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
          fields {
            imagePath {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    heroBanner: imageSharp(id: { regex: "/kitchen/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;



// thumbnail {

// }

// {
//   childImageSharp {
//     sizes(maxWidth: 650) {
//       ...GatsbyImageSharpSizes
//     }
//   }
// }