import React from "react"

import styles from "./bio.module.css"

class Bio extends React.Component {
  render () {
    return(
        <div className={this.props.location === "template" ? styles.template : styles.cont}>
          <h3 className={styles.text} style={{margin:0}}>Hey, I'm Michael. Im a student at Ohio State interested in <a className={styles.orange}>web development</a>, <a className={styles.purple}>data journalism</a>, <a className={styles.blue}>cooking</a> and <a className={styles.green}>making all kinds of things</a>.</h3>
        </div>
    )
  }
}

export default Bio
