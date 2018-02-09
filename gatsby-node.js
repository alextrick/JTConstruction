const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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

// changes thumbnail path to correct relative path 
exports.onCreateNode = ({ node, getNode, loadNodeContent, boundActionCreators }) => {
  const { createNode, createNodeField } = boundActionCreators
  const { frontmatter } = node
  if (frontmatter) {
    const { thumbnail } = frontmatter
    if (thumbnail) {
      const value = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/src/', thumbnail)
      )
      if (thumbnail.indexOf('/images/uploads') === 0 ) {
        // let value = path.relative(
        //   path.dirname(node.fileAbsolutePath),
        //   path.join(__dirname, '/static', thumbnail)
        // );
        // console.log(value);
        createNodeField({
          node,
          name: `imagePath`,
          value
        });
      } 
    }
  }
}

// exports.onCreateNode = ({ node, getNode, getNodes, boundActionCreators }) => {
//   const { createNode, createNodeField } = boundActionCreators
//   if (node.internal.type === `MarkdownRemark`) {
//     // Create link
//     // Find absolute path of linked path
//     const pathToFile = path.resolve(getNode(node.parent).absolutePath, node.frontmatter.thumbnail)
//     // Find ID of File node
//     const fileNode = getNodes().find(n => n.absolutePath === pathToFile)
//     createNodeField({
//       node,
//       name: `imageLink___NODE`,
//       value: fileNode.id,
//     })
//   }
//   // Transform the new node here and create a new node or
//   // create a new node field.
// }
// let check = 1;

exports.onCreateNode = ({
  node, getNode, getNodes, boundActionCreators,
}) => {
  const { createNodeField, createParentChildLink } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
//     // Attach thumbnail's ImageSharp node by public path if necessary
    if (typeof node.frontmatter.thumbnail === 'string') {
      // Find absolute path of linked path
      const pathToFile = path
        .join(__dirname, 'src', node.frontmatter.thumbnail)
        .split(path.sep)
        .join('/');
      const fileNode = getNodes().find(n => n.absolutePath === pathToFile);
    
      if (fileNode != null) {
        // console.log(fileNode.absolutePath)
        // Find ImageSharp node corresponding to the File node
        const imageSharpNodeId = fileNode.children.find(n => n.endsWith('>> ImageSharp'));
        const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId);
        // Add ImageSharp node as child
      
        if(imageSharpNode) {
          createParentChildLink({ parent: node, child: imageSharpNode });
        }
      }
    }
  }
};
