import React from 'react';
import Link from 'gatsby-link';

import Swiper from 'react-id-swiper';

const IndexGallery = ({ data }) => {

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
    )
}

export default IndexGallery;

export const query = graphql`
    query IndexGalleryQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              thumbnail
              path
              title
            }
          }
        }
      }
    }
`
;