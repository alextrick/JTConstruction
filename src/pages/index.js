import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';


const IndexGallery = ({ data }) => {


  console.log(data.allMarkdownRemark.edges)
  return (
    <div className="section gallery">
      <h3 className="title">Gallery</h3>
      <hr />
      <div className="grid">
        { data.allMarkdownRemark.edges.map((image, index) => {
            if (index % 2 === 0) {
              if (index % 3 === 0) {

              }
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

const IndexPage = ({ data }) =>  {

  return (
    <div>
      <div className="section hero-content-area">
        <div className="hero">
          <Img className="hero-banner" sizes={data.kitchImage.sizes} />
          <div className="hero-info">
            <h1>Blah blah Blah</h1>
            <h3>Lorem ipsum dolor sit amet, eu atomorum salutandi reformidans vix, ex magna malorum usu, legere platonem consequat eu qui. Libris gloriatur ius cu, no sit lorem repudiare cotidieque. Nam in virtute officiis platonem. In sed invenire deseruisse. Id vim quidam sapientem reprehendunt, eum ut ancillae molestie incorrupte.</h3>
            <Link to="#" className="btn">Contact Now</Link>
          </div>
        </div>
      </div>

      <div className="section services">
        <h3 className="title">Services</h3>
        <p>Id timeam copiosae mandamus vel, mea appetere instructior no. Quem case delenit ei pro, id admodum mandamus usu.</p>
        <hr />
        <ul className="grid">
            <li>
                <h4>Blah 1</h4>
                <p>Illum dicam denique vix ut. Mei ullum appellantur ut, per id animal suscipit omittantur. 
                    Ornatus percipit similique mei ne, ex vis dicit consulatu.</p>
            </li>
            <li>
                <h4>Blah 2</h4>
                <p>Nec ne discere epicurei inimicus, usu sensibus salutandi ad, 
                    ne ullum debet partem pro.
                </p>
            </li>
            <li>
                <h4>Blah 3</h4>
                <p>Sea habemus adolescens vituperata ne, affert tractatos te vim, his viderer numquam vituperatoribus ei. 
                    No doctus impedit deleniti his, doming blandit ei usu.
                </p>
            </li>
            <li>
                <h4>Blah 4</h4>
                <p>Vis id graeco partiendo contentiones, cum suas labitur temporibus te, 
                    et est libris dignissim.
                </p>
            </li>
            <li>
                <h4>Blah 5</h4>
                <p>His munere aliquam insolens at, animal accumsan democritum ad nam. 
                    Est cu aeterno labitur. Iusto omnesque patrioque nam an.
                </p>
            </li>
            <li>
                <h4>Blah Six</h4>
                <p>Vim in alia consetetur honestatis, eos nisl falli necessitatibus ad. 
                    Option civibus no nec, sea an luptatum corrumpit.
                </p>
            </li>
        </ul>
      </div>

      {/* <div className="section gallery">
            <h3 className="title">Gallery</h3>
            <hr />
            <div className="grid">
                <Img className="img small" sizes={data.galOne.sizes}/>
                <Img className="img large" sizes={data.galTwo.sizes}/>
                <Img className="img large" sizes={data.galThree.sizes}/>
                <Img className="img small" sizes={data.galFour.sizes}/>
            </div>
        </div> */}

        <IndexGallery data={data} />

        <div className="section contact">
            <h3 className="title">Contact</h3>
            <p>
                Illum dicam denique vix ut. Mei ullum appellantur ut, per id animal suscipit omittantur. 
                Ornatus percipit similique mei ne, ex vis dicit consulatu.
            </p>
            <hr />
            <form name="contact"
                  method="post"
                  // action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
                <input name="contact" type="text" placeholder="Name" />
                <input name="contact" type="email" placeholder="Email" required />
                <textarea name="contact" rows="10" placeholder="Please give some details about your project." required />
                <button name="contact" type="submit" className="btn">Contact Now</button>
            </form>
        </div>
    </div>
  )
}


export default IndexPage



export const query = graphql`
  query PageQuery {
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
    kitchImage: imageSharp(id: { regex: "/kitchen/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galOne: imageSharp(id: { regex: "/one/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galTwo: imageSharp(id: { regex: "/two/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galThree: imageSharp(id: { regex: "/three/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    galFour: imageSharp(id: { regex: "/four/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;