import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import styles from "../pages/blog.module.css"

import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
        <h2 style={{textAlign:"center",fontSize:"28px",marginBottom:"10px"}}>{tagHeader}</h2>
        <div style={{textAlign:"center"}}>
          <Link className={styles.viewAll} to={"/blog"}>
            view all posts
          </Link>
        </div>
        <div className={styles.posts}>
          {edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tags = node.frontmatter.tags
            const picture = node.frontmatter.attachments[0].childImageSharp.fixed

            return (
              <div className={styles.post} key={node.fields.slug}>
                <Link className={styles.postLink}  to={node.fields.slug}></Link>
                <div style={{height:"175px",width:"100%",overflow:"hidden",textAlign:"center",borderRadius:"5px 5px 0px 0px"}}>
                  <Image
                     fixed={picture}
                     alt={title}
                     class={styles.img}
                   />
                 </div>
                <div style={{padding:"15px"}}>
                  <h3 style={{marginBottom:"3px",textAlign:"left",fontSize:"24px"}}>
                  {title}
                </h3>
                  <h6 style={{textAlign:"left"}}>{node.frontmatter.date}</h6>
                  <div style={{display:"flex",flexWrap:"wrap",marginTop:"10px"}}>
                    {tags.map((currentTag) => {
                      return(
                        <Link style={{width:"48%",marginLeft:"2px",marginRight:"2px",marginBottom:"4px",textDecoration:"none",zIndex:"1"}} to={`/tags/${currentTag}`}>
                          <div className={ currentTag === tag ? styles.selected : styles.tag}>
                            #{currentTag}
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
            </div>
            )
          })}
        </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            attachments {
              childImageSharp {
                fixed (height:175){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
