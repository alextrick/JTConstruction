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

//handles parent/child relationships between imageSharp nodes and gallery images.
exports.onCreateNode = ({
  node, getNode, getNodes, boundActionCreators, graphql
}) => {
  const { createNodeField, createParentChildLink, createNode } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.thumbnail === 'string') {
      // Find absolute path of linked path
      const pathToFile = path
        .join(__dirname, 'src', node.frontmatter.thumbnail)
        .split(path.sep)
        .join('/');

      const fileNode = getNodes().find(n => n.absolutePath === pathToFile);
    
      if (fileNode != null) {
        // Find ImageSharp node corresponding to the File node
        const imageSharpNodeId = fileNode.children.find(n => n.endsWith('>> ImageSharp'));
        const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId);
        // Add ImageSharp node as child
        if(imageSharpNode) {
          createParentChildLink({ parent: node, child: imageSharpNode });
        }
      }
    }
    if (node.frontmatter.galleryImages) {
      const galleryImageSharp = [];
      //push each imageSharp node for each image into array
      node.frontmatter.galleryImages.forEach((image, index) => {
        const pathToFile = path
          .join(__dirname, 'src', image)
          .split(path.sep)
          .join('/');
        
          const galleryImageNode = getNodes().find(n => n.absolutePath === pathToFile);
          //add each galleryImageSharpNode to node
          if (galleryImageNode != null) {
            const galleryImageSharpNodeId = galleryImageNode.children.find(n => n.endsWith('>> ImageSharp'));
            
            const galleryImageSharpNode = getNodes().find(n => n.id === galleryImageSharpNodeId);
            galleryImageSharp.push(galleryImageSharpNode);

            if (galleryImageSharpNode) {
              createParentChildLink({parent: node, child: galleryImageSharpNode})
            }
          }
      });

      //create note with array of imageSharpNodes and make child of markdown node
      createNode({
        galleryNodes: galleryImageSharp,
        children: [],
        parent: node.id,
        id: `${node.frontmatter.title} gallery node`,
        internal: {
          type: `galleryImageSharp`,
          contentDigest: 'temp'
        }
      });
    }
  }
};
