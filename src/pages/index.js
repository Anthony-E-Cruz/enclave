import * as React from "react";
import styled from "styled-components";
import Subscribe from "../components/Subscribe";
import SpashImage1 from "../components/splashImages/splash1"
import SpashImage2 from "../components/splashImages/splash2"

const Text = styled.p`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
`

const IndexPage = () => {

  const notification = () => {
    return (
      <div className="splash-notification-container">
        <Text>Free shipping on all orders Until May 20th</Text>
      </div>
    )
  }

  // const splashImages = () => {
  //   return (
  //     <div className="splash-image-container">
  //       <img className="splash-image" src={splash} />
  //     </div>
  //   )
  // }

  // const signUp = () => {
  //   return (
  //     <div className="splash-sign-up-container">
  //       <Text>Keep up with our journey</Text>
  //     </div>
  //   )
  // }

  return (
    <>
      {/* {notification()} */}
      {/* {splashImage()} */}
      {/* {signUp()} */}
      <SpashImage1 />
      <SpashImage2 />
      <Subscribe />
    </>
  )
}


export default IndexPage

// export const query = graphql`
//   {
//     shopifyArticle {
//       id
//       title
//       url
//       content
//     }
//   }
// `