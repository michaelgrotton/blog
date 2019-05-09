import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import FeaturedPosts from "../components/featuredposts"
import FeaturedProjects from "../components/featuredprojects"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import SEO from "../components/seo"
import styles from "./index.module.css"


class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `Michael Grotton`]}
        />
        <div className={styles.cont}>
          <Bio location={"home"}/>
          <Carousel/>
        </div>
        <FeaturedPosts />
        <FeaturedProjects />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
