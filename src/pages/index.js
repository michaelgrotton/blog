import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import FeaturedPosts from "../components/featuredposts"
import FeaturedProjects from "../components/featuredprojects"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `Michael Grotton`]}
        />
        <Bio />
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
