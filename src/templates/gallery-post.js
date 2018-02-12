import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Swiper from 'react-id-swiper';

export const Gallery = ({data}) => {

  const params = {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      slidesPerView: 2,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 6000,
      // },
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      breakpoints: {
        1200: {
          slidesPerView: 1,
        }
      }
    };

  return (
    <div className="gallery-container">
      <Swiper {...params}>
        {data
          .filter(image => image != null)
          .map((image, index) => {
            return (
              <div key={index}>
                <Link to={image.original.src}>
                  <Img className="main-gallery-image" sizes={image.sizes} alt={`Image ${index}`} />
                </Link>
              </div>
            )
          })}
      </Swiper>
    </div>
    
  )
}

export default function Template({
  data
}) {
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
      <Helmet title={`Joe Thomas Construction - ${frontmatter.title}`} />
      <div className="section main-gallery-info">
        <h3 className="title">{frontmatter.title}</h3>
        <hr />
        <div className="main-gallery-details">
          <p>{frontmatter.description}</p>
        </div>
      </div>
      <div className="section main-gallery">
        <h3 className="title">Project Gallery</h3>
        <p>Select an image to view original.</p>
        <hr />
          <Gallery data={data.markdownRemark.children} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query GalleryPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
      children {
        ... on ImageSharp {
          sizes(maxWidth: 1000) {
            ...GatsbyImageSharpSizes
          }
          original {
            src
          }
        }
      }
    }
  }
`
;