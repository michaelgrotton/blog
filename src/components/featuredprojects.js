import React from "react"
import styles from "./projects.module.css"


function FeaturedProjects() {
    return (
      <div>
        <h2 style={{textAlign:"center",fontSize:"28px",marginTop:"20px"}}>Projects</h2>
        <h4 style={{marginBottom:"5px"}}>Technical Projects</h4>
        <hr/>
        <div style={{marginBottom:"10px"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"60%"}}>
              <h3 style={{fontSize:"21px",marginBottom:"5px"}}>Spotify Personal Profile</h3>
              <p style={{fontSize:"16px"}}>Node/Express web app that allows a spotify user to login and view their listening history.</p>
            </div>
            <div style={{display:"flex",width:"30%",flexWrap:"wrap",justifyContent:"space-between",alignContent:"start",alignItems:"center",marginRight:"10px"}}>
              <a href="https://github.com/michaelgrotton/spotify-music-profile" style={{textDecoration:"none"}}>
                <div className={styles.source}>
                  Source
                </div>
              </a>
              <a href="https://github.com/michaelgrotton/spotify-music-profile" style={{textDecoration:"none"}}>
                <div className={styles.demo}>
                  Demo
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{marginBottom:"10px"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"60%"}}>
              <h3 style={{fontSize:"21px",marginBottom:"5px"}}>michaelgrotton.xyz</h3>
              <p style={{fontSize:"16px"}}>This site, designed and built by me with gatsby.js</p>
            </div>
            <div style={{display:"flex",width:"30%",flexWrap:"wrap",justifyContent:"space-between",alignContent:"start",alignItems:"center",marginRight:"10px"}}>
              <a href="https://github.com/michaelgrotton/blog" style={{textDecoration:"none"}}>
                <div className={styles.source}>
                  Source
                </div>
              </a>
            </div>
          </div>
        </div>
        <h4 style={{marginBottom:"5px"}}>Data Journalism / Data Visualization</h4>
        <hr/>
        <h4 style={{marginBottom:"5px"}}>Other</h4>
        <hr/>
      </div>
      )
}
export default FeaturedProjects;
