import React from "react"
import Navigation from "./navigation"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <header>
          <Navigation/>
        </header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          <main style={{marginTop:75}}>{children}</main>
          <footer
          style={{marginTop:"10px",marginBottom:"10px"}}>
            Made by Michael / <a href="http://www.github.com/michaelgrotton/blog" style={{textDecoration:"none"}}>View Source</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
