import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  width: 20vw;

  @media (max-width: 768px) {
    height: 10vh;
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items: center
  }
`

const StyledImg=styled(Img)`
  width: 100%;
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "logo"}, extension: {eq: "png"}) {
        childImageSharp {
          fixed(width: 150, pngQuality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
          fluid(maxWidth: 200, pngQuality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <LogoWrap>
      {/* <StyledImg fixed={data.file.childImageSharp.fixed} alt="logo" /> */}
      <StyledImg fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo