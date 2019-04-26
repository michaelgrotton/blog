import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styles from "./nav.module.css"

class Navigation extends React.Component {
  state = {
    scrolled: false,
  }

  navOnScroll = () => {
    if (window.scrollY > 15) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  render() {
    let nav;
    let pill;
    let logo;


    if(this.state.scrolled) {
      nav = styles.navScrolled
      pill = styles.pillScrolled
      logo = styles.logoScrolled
    } else {
      nav = styles.nav
      pill = styles.pill
      logo = styles.logo
    }

    return (
      <div className={nav}>
        <div className={styles.navContents} style={{maxWidth: rhythm(30)}}>
          <div>
            <Link to={'/'} style={{boxShadow:"none",textDecoration:"none"}}>
              <h3 className={logo}>Michael Grotton</h3>
            </Link>
          </div>
          <div>
              <Link style={{display:"inline-block",textDecoration:"none",marginTop:"7px",marginLeft:"4px"}} to={`/blog`}><div className={pill}>&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;</div></Link>
              <Link style={{display:"inline-block",textDecoration:"none",marginTop:"7px",marginLeft:"4px"}} to={`/projects`}><div className={pill}>Projects</div></Link>
              <Link style={{display:"inline-block",textDecoration:"none",marginTop:"7px",marginLeft:"4px"}} to={`/about`}><div className={pill}>About Me</div></Link>
              <Link style={{display:"inline-block",textDecoration:"none",marginTop:"4px"}} to={`/connect`}><div className={pill + " " + styles.connect}>Get in Touch</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
