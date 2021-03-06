import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/styles.css"

const Button = () => <a href="https://www.jzlvip.tv/" className="block-button">Enter site</a>

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className="page-section">
      <div className="section-background">
        <Img
          style={{
            width: "100%",
            height: "100%",
            objectPosition: "50% 50%",
            objectFit: "cover",
          }}
          fluid={data.file.childImageSharp.fluid}
          alt="Gatsby Docs are awesome"
        />
        <div className="overlay" style={{ opacity: 0.4 }} />
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div className="row">
            <h1
              style={{
                textAlign: "center",
                whiteSpace: "pre-wrap",
              }}
            >
              The Wildest XXX Pranks, Stunts, And Challenges Around The World!
            </h1>
          </div>
          <div className="row center" >
            <Button />
          </div>
        </div>
      </div>
    </section>
  )
}
