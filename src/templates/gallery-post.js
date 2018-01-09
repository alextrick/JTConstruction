import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Swiper from 'react-id-swiper';

class Navigation extends Component {
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    )
  }
}

export const Gallery = ({data}) => {
  const frontmatter = data;
  const gal = frontmatter.galleryImages;

  const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
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
    <div className="section gallery">
      <Helmet title={`Your Blog Name - ${frontmatter.title}`}>
        {/* <script src="https://unpkg.com/react-id-swiper@1.5.7/lib/react-id-swiper.js"></script> */}
      </Helmet>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <Gallery
         data={frontmatter}
        />
        <p>{frontmatter.description}</p>
      </div>
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