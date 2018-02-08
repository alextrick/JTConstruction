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
    if (!node.fields) {
      const value = frontmatter.thumbnail = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/static/', thumbnail)
      )
      createNodeField({
        node,
        name: `path`,
        value
      })
    }
  }
}