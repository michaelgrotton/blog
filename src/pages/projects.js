import React from "react"

import Layout from "../components/layout"
import FeaturedProjects from "../components/featuredprojects"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    return (
      <Layout>
          <SEO
            title="Projects"
          />
          <FeaturedProjects />
      </Layout>
    )
  }
}

export default Projects
