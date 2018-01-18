import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Swiper from 'react-id-swiper';
import { Fade } from 'react-reveal';

export const Gallery = ({data}) => {
  const frontmatter = data;
  const gal = frontmatter.galleryImages;

  const params = {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      loop: true,
      slidesPerView: "auto",
      autoHeight: true,
      autoplay: {
        delay: 6000,
      },
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
              <img className="main-gallery-image" src={image} key={`Image ${index}`} />
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
    <div>
      <Helmet title={`Joe Thomas Construction - ${frontmatter.title}`} />
      <div className="section main-gallery">
        <h3 className="title">{frontmatter.title}</h3>
        <hr />
        <Fade bottom>
          <Gallery data={frontmatter} />
        </Fade>
      </div>
      <div className="section">
        <h3 className="title">Project details</h3>
        <hr />
        <Fade bottom>
          <p>{frontmatter.description}</p>
        </Fade>
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
        thumbnail
        description
        galleryImages
      }
    }
  }
`
;