import React from "react"

import styles from "./bio.module.css"

class Bio extends React.Component {
  render () {
    return(
        <div className={this.props.location === "template" ? styles.template : styles.cont}>
          <h3 className={styles.text} style={{margin:0}}>Hey, I'm Michael. Im a student at Ohio State
            interested in <a className={styles.blue}>web development</a>, <a className={styles.blue}>data journalism</a>, <a className={styles.blue}>cooking</a> and <a className={styles.blue}>making all kinds of things</a>.
            You can also find me on <a className={styles.green} href="https://open.spotify.com/user/frankiesastronautfund?si=12tnlNU8ThmkrYdQPGuVTQ&ts=20180220195551">spotify</a> and <a className={styles.grey} href="https://www.github.com/michaelgrotton">github</a>.</h3>
        </div>
    )
  }
}

export default Bio
