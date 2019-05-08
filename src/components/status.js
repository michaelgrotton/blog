import React from "react"
import styles from "./status.module.css"

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  
  render() {
    return (
      <div className={styles.bar}>
        <h3 className={styles.label}>Status:</h3>
        <p className={styles.status}><i>Test Test This is a status Test Test This is a status </i>🌌 🌉 🌁</p>
      </div>
    )
  }
}

export default Status
