import React from "react"

import Layout from "../components/layout"
import styles from "./connect.module.css"
import SEO from "../components/seo"


class Connect extends React.Component {
  render() {
    return (
      <Layout>
          <SEO
            title="Contact"
          />
          <h2 style={{textAlign:"center"}}>Let&#39;s be internet friends!</h2>
          <form style={{display:"flex",flexDirection:"column",alignItems:"center"}} name="contact-form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-form"/>
            <div className={styles.cont}>
              <label>Your Name: </label>
              <input className={styles.area} type="text" name="name" required/>
            </div>
            <div className={styles.cont}>
              <label>Your Email: </label>
              <input className={styles.area} style={{boxShadow:"1px 2px 10px rgba(0, 0, 0, 0.03)"}} type="text" name="email" required/>
            </div>
            <div className={styles.cont}>
              <label>Message: </label>
              <textarea className={styles.area} style={{height:"300px"}} name="message" required></textarea>
            </div>
            <div className={styles.cont}>
              <button className={styles.send} type="submit">Send</button>
            </div>
          </form>
      </Layout>
    )
  }
}

export default Connect
