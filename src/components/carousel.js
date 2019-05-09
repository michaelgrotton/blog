import React from "react"
import styles from "./status.module.css"
import Status from "./status"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statuses: [
        "Watching a lot of nba playoffs",
        "Working at a farm-to-table restaurant in Maine this summer, learning more about bread and veggies",
        "Reading \"Just Kids\" by Patti Smith"
      ],
      emojis: [
        "🏀",
        "🥖 👨‍🍳 🥕",
        ""
      ],
      currentIndex: 0,
    }
  }

  nextStatus = () => {
    console.log("hello")
    if(this.state.currentIndex + 1 < this.state.statuses.length) {
      let next = this.state.currentIndex + 1
      this.setState({currentIndex:next})
    } else {
      this.setState({currentIndex:0})
    }
  }

  prevStatus = () => {
    if(this.state.currentIndex - 1 >= 0) {
      let next = this.state.currentIndex - 1
      this.setState({currentIndex:next})
    } else {
      let next = this.state.statuses.length - 1
      this.setState({currentIndex:next})
    }
  }

  render() {
    return (
      <StaticQuery
      query={arrowQuery}
      render={data => {
            return(
              <div className={styles.bar}>
                <h3 className={styles.label}>My Status:</h3>
                <div className={styles.cont}>
                  <div onClick={this.prevStatus} style={{height:"25px"}}>
                    <Image
                      fixed={data.left.childImageSharp.fixed}
                      alt={"prev"}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                      className={styles.arrow}
                    />
                  </div>
                <Status status={this.state.statuses[this.state.currentIndex]} emojis={this.state.emojis[this.state.currentIndex]} />
                  <div onClick={this.nextStatus} style={{height:"25px"}}>
                    <Image
                      fixed={data.right.childImageSharp.fixed}
                      alt={"next"}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                      className={styles.arrow}
                    />
                  </div>
                </div>
              </div>
            )
          }
        }
      />
    )
  }
}

export default Carousel

export const arrowQuery = graphql`
query {
  right: file(absolutePath: { regex: "/right-arrow-circular-button.png/" }) {
      childImageSharp {
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  left: file(absolutePath: { regex: "/back-arrow-circular-symbol.png/" }) {
      childImageSharp {
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
}
`
