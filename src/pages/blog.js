import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styles from "./blog.module.css"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const categories = this.props.data.categories.group.filter(
category => category.fieldValue !== 'pinned'
)

    return (
      <Layout>
          <h2 style={{textAlign:"center"}}>All Blog Posts</h2>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {categories.map(category => (
              <div style={{display:"flex",marginRight:"4px",marginBottom:"4px"}}>
                <Link to={`/tags/${category.fieldValue}`} className={styles.category} style={{paddingLeft:"10px",paddingRight:"10px"}}key={category.fieldValue}>
                  <span key={category.fieldValue}>
                    #{category.fieldValue} <strong style={{color:"red"}}>{category.totalCount}</strong>
                  </span>
                </Link>
              </div>
              ))}
          </div>
          <div className={styles.posts}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const tags = node.frontmatter.tags
              const headerURL = node.frontmatter.attachments[0].publicURL

              return (
                <div className={styles.post} key={node.fields.slug}>
                  <Link className={styles.postLink}  to={node.fields.slug}></Link>
                  <div className={styles.img} style={{backgroundImage:'url(' + headerURL + ')'}}></div>
                  <div style={{padding:"15px"}}>
                    <h3 style={{marginBottom:"3px",textAlign:"left",fontSize:"24px"}}>
                    {title}
                  </h3>
                    <h6 style={{textAlign:"left"}}>{node.frontmatter.date}</h6>
                    <div style={{display:"flex",flexWrap:"wrap",marginTop:"10px"}}>
                      {tags.map((tag) => {
                        return(
                        <Link style={{width:"48%",marginLeft:"2px",marginRight:"2px",marginBottom:"4px",textDecoration:"none",zIndex:"1"}} to={`/tags/${tag}`}>
                          <div className={styles.category} style={{border:"0px",lineHeight:"32px"}}>
                            #{tag}
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
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            attachments {
              publicURL
            }
          }
        }
      }
    }
    categories: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
  }
`
