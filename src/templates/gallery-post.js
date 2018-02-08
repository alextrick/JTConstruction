import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Swiper from 'react-id-swiper';

export const Gallery = ({data}) => {
  const frontmatter = data;
  const gal = frontmatter.galleryImages;

  const params = {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      watchOverflow: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    };

  if (gal.length <= 1) {
    params.loop = false;
  }

  return (
    <div className="gallery-container">
      <Swiper {...params}>
        {gal
          .filter(image => image != null)
          .map((image, index) => {
            return (
              <img key={index} className="main-gallery-image" src={image} key={`Image ${index}`} />
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
  const gal = frontmatter.galleryImages;
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
        <hr />
          <Gallery data={frontmatter} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query GalleryPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        galleryImages
      }
    }
  }
`
;