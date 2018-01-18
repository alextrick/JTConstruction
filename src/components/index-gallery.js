import React from 'react';
import Link from 'gatsby-link';

import Swiper from 'react-id-swiper';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Fade } from 'react-reveal';

const IndexGallery = ({ data }) => {

  const params = {
    slidesPerView: 2,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    spaceBetween: 20,
    loop: true,
    preloadImages: false,
    lazy: true,
    loadPrevNext: true,
    loadPrevNextAmount: 5,
    autoplay: {
      delay: 6000,
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
      <p>Select an image to view the gallery.</p>
      <hr />
      <Fade bottom delay={0} fraction={0.05}>
        <Swiper {...params}>
          { data.allMarkdownRemark.edges.map((image, index) => {
              return (
                <Link to={image.node.frontmatter.path} key={index}>
                  <div className="gallery-image">
                    <div className="gallery-preload-cover"></div>
                    <img className="img swiper-lazy" data-src={image.node.frontmatter.thumbnail} alt={`A link to ${image.node.frontmatter.title} project`} onload="this.style.visibility = 'visible'" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">{image.node.frontmatter.title}</div>
                    </div>
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
