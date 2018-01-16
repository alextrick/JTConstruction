import React from 'react';
import Link from 'gatsby-link';

import Swiper from 'react-id-swiper';

const IndexGallery = ({ data }) => {

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    preloadImages: false,
    lazy: true,
    loadPrevNext: true,
    loadPrevNextAmount: 5,
    autoHeight: true,
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    direction: "horizontal",
    breakpoints: {
      800: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 2,
      }
    }
  };

  return (
    <div className="section gallery">
      <h3 className="title">Gallery</h3>
      <p>Use the arrows to browse and select an image to view the gallery.</p>
      <hr />
      <Swiper {...params}>
        { data.allMarkdownRemark.edges.map((image, index) => {
            return (
              <Link to={image.node.frontmatter.path} key={index}>
                <img className="img swiper-lazy" data-src={image.node.frontmatter.thumbnail} alt={`A link to ${image.title} project`} />
                <div class="swiper-lazy-preloader"></div>
              </Link>
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default IndexGallery;
