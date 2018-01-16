import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Swiper from 'react-id-swiper';

export const Gallery = ({data}) => {
  const frontmatter = data;
  const gal = frontmatter.galleryImages;

  const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      loop: true,
      slidesPerView: "auto",
      autoHeight: true,
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      }
    };

  if (gal.length <= 1) {
    params.loop = false;
  }

  return (
    <Swiper {...params}>
      {gal
        .filter(image => image != null)
        .map((image, index) => {
          return (
            <div key={index}>
              <img src={image} key={`Image ${index}`} />
            </div>
          )
        })}
    </Swiper>
  )
}

export default function Template({
  data
}) {
  const { frontmatter } = data.markdownRemark;
  const gal = frontmatter.galleryImages;
  return (
    <div className="section">
      <Helmet title={`Joe Thomas Construction - ${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>
        <Gallery
         data={frontmatter}
        />
        <p>{frontmatter.description}</p>
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
        thumbnail
        description
        galleryImages
      }
    }
  }
`
;