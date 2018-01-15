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

// export const SwiperInit = () => {
//   const mySwiper = new Swiper ('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

//   return <div></div>
// }

export default function Template({
  data
}) {
  const { frontmatter } = data.markdownRemark;
  const gal = frontmatter.galleryImages;

  

  return (
    <div className="section">
      <Helmet title={`Your Blog Name - ${frontmatter.title}`}>
        {/* <script src="https://unpkg.com/react-id-swiper@1.5.7/lib/react-id-swiper.js"></script> */}
      </Helmet>
        <h1>{frontmatter.title}</h1>
        <Gallery
         data={frontmatter}
        />
        <p>{frontmatter.description}</p>
      {/* <SwiperInit /> */}
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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