import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
  padding: 1rem;
  margin-top: 1rem
`

const StyledImg=styled(Img)`
  margin: 0;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "splash1"}, extension: {eq: "jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <LogoWrap>
      <StyledImg fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo