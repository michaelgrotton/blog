import React from "react"
import {StaticQuery, graphql, Link } from "gatsby"

import styles from "../pages/blog.module.css"

function FeaturedPosts() {
    return (
      <StaticQuery
       query = {pageQuery}
       render = { data => {
         const posts = data.allMarkdownRemark.edges;
         return (
           <div>
             <h2 style={{textAlign:"center",fontSize:"28px"}}>Featured Blog Posts</h2>
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
                           <Link style={{width:"48%",marginLeft:"2px",marginRight:"2px",marginBottom:"4px",textDecoration:"none",zIndex:"1"}} key={tag} to={`/tags/${tag}`}>
                             <div className={ tag === "featured" ? styles.selected : styles.category} style={{border:"0px",lineHeight:"32px"}}>
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
           </div>
          )
      }
    }/>
  )
}

export default FeaturedPosts;

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: { frontmatter: { tags: { in: ["featured"] } } }, sort: { fields: [frontmatter___date], order: DESC }, limit:3) {
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
}
`
