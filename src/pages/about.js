import * as React from "react";
import NavBar from '../components/Navbar/Navbar';
import styled from 'styled-components';

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center
`
  
  const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: .5rem;
  color: black;
`
  
  const Text = styled.p`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: black;

  @media (max-width: 600px) {
    width: 80vw;
  }
`

const aboutUs = () => {
  return (
    <AboutUs>
        <Title>About Us</Title>
        <Text>Enclave is a menswear line rooted in principles of quality, construction and
        rugged individualism. Streetwear staples are informed by classical tailoring
        and tempered with industrial finishing. Each garment is made to fit perfectly
        in todays urban landscape.</Text>
    </AboutUs>
  )
};

export default aboutUs;