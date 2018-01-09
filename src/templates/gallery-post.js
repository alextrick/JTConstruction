import React from 'react';
import Helmet from 'react-helmet';

// import '../css/blog-post.css';

export default function Template({
  data
}) {
  const { frontmatter } = data.markdownRemark;
  const gal = frontmatter.galleryImages;

  return (
    <div className="section gallery">
      <Helmet title={`Your Blog Name - ${frontmatter.title}`} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <img src={frontmatter.thumbnail} />
        <div className="grid">
          {gal
            // .filter(image => image.length > 0)
            .map((image, index) => {
              return (
                <img src={image} key={index} className="img"/>
              )
            })
          }
        </div>
        <p>{frontmatter.description}</p>
      </div>
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