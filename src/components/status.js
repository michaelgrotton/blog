import React from "react"
import styles from "./status.module.css"

class Status extends React.Component {
  render() {
    return (
      <p className={styles.status}><i>{this.props.status}</i> {this.props.emojis}</p>
    )
  }
}

export default Status
