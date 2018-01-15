import React from 'react';
import Link from 'gatsby-link';

import Swiper from 'react-id-swiper';

const IndexGallery = ({ data }) => {
  
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

  if (data.allMarkdownRemark.edges.length > 4) {

    const createGroupedArray = (arr, chunkSize) => {
        let groups = [], i;
        for (i = 0; i < arr.length; i += chunkSize) {
            groups.push(arr.slice(i, i + chunkSize));
        }
        return groups;
    }
    const groups = createGroupedArray(data.allMarkdownRemark.edges, 4);

    console.log(groups);
    
    return (
      <div className="section gallery">
        <h3 className="title">Gallery</h3>
        <hr />
        <Swiper {...params}>
          <div className="grid">
            { data.allMarkdownRemark.edges.map((image, index) => {
                if (index === 0 || index === 3) {
                    return  (
                        <Link to={image.node.frontmatter.path} key={index}>
                          <img className="img small" src={image.node.frontmatter.thumbnail} alt={`A link to ${image.title} project`} />
                        </Link>
                    )
                } else {
                    return (
                      <Link to={image.node.frontmatter.path} key={index}>
                        <img className="img large" src={image.node.frontmatter.thumbnail} alt={`A link to ${image.title} project`} />
                      </Link>
                    )
                }
              })
            }
          </div>
        </Swiper>
      </div>
    );
  } else {
    return (
      <div className="section gallery">
        <h3 className="title">Gallery</h3>
        <hr />
        <div className="grid">
          { data.allMarkdownRemark.edges.map((image, index) => {
              if (index === 0 || index === 3) {
                  return  (
                      <Link to={image.node.frontmatter.path} key={index}>
                        <img className="img small" src={image.node.frontmatter.thumbnail} alt={`A link to ${image.title} project`} />
                      </Link>
                  )
              } else {
                  return (
                    <Link to={image.node.frontmatter.path} key={index}>
                      <img className="img large" src={image.node.frontmatter.thumbnail} alt={`A link to ${image.title} project`} />
                    </Link>
                  )
              }
            })
          }
        </div>
      </div>
    );
  }  
}

export default IndexGallery;

// export const query = graphql`
//     query IndexGalleryQuery {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               thumbnail
//               path
//               title
//             }
//           }
//         }
//       }
//     }
// `
// ;