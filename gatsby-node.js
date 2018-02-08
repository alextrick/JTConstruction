const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const galleryPostTemplate = path.resolve(`src/templates/gallery-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: galleryPostTemplate,
            context: {} // additional data can be passed via context
          });
        });
    });
}

//changes thumbnail path to correct relative path 
exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { createNode, createNodeField } = boundActionCreators
  const { frontmatter } = node
  if (frontmatter) {
    const { thumbnail } = frontmatter
    if (thumbnail) {
      // const value = frontmatter.thumbnail = path.relative(
      //   path.dirname(node.fileAbsolutePath),
      //   path.join(__dirname, '/static/', thumbnail)
      // )
      let value = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/src', thumbnail)
      );
      createNodeField({
        node,
        name: `imagePath`,
        value
      })
    }
  }
}
