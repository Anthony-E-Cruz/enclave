import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  width: 20vw;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 40vw;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center
  }
`

const StyledImg=styled(Img)`
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "logo"}, extension: {eq: "png"}) {
        childImageSharp {
          fixed(width: 150, pngQuality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <StyledImg fixed={data.file.childImageSharp.fixed} alt="logo" />
    </LogoWrap>
  )
}

export default Logo