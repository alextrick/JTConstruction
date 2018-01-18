import React from 'react';
import Link from 'gatsby-link';

import Swiper from 'react-id-swiper';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Fade } from 'react-reveal';

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
      <ScrollableAnchor id={"gallery"}>
        <h3 className="title">Gallery</h3>
      </ScrollableAnchor>
      <p>Use the arrows to browse and select an image to view the gallery.</p>
      <hr />
      <Fade bottom delay={0} fraction={0.05}>
        <Swiper {...params}>
          { data.allMarkdownRemark.edges.map((image, index) => {
              return (
                <Link to={image.node.frontmatter.path} key={index}>
                  <div className="gallery-image">
                    <div className="gallery-preload-cover"></div>
                    <img className="img swiper-lazy" data-src={image.node.frontmatter.thumbnail} alt={`A link to ${image.node.frontmatter.title} project`} />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">{image.node.frontmatter.title}</div>
                    </div>
                    <div className="swiper-lazy-preloader"></div>
                  </div>
                </Link>
              )
            })
          }
        </Swiper>
      </Fade>
    </div>
  );
}

export default IndexGallery;
