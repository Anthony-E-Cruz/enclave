import React, { useState } from 'react'
import Img from "gatsby-image";
import styled from "styled-components"

const ProductShopCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.5vw;
  justify-content: center;
  margin: .5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 2%;
  }
`
const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: black
`
const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black
`

const ProductBox = props => {
    const product = props.product;
    const img1 = product.node.images[0].localFile.childImageSharp.fluid;
    const img2 = product.node.images[1].localFile.childImageSharp.fluid;
    const [img, setImg] = useState(true);

    const firstImg = () => (
      <Img
        fluid={img1}
        key={product.node.images[0].localFile.id}
        fadeIn={false} 
        loading="eager"
        alt={product.node.title}
      />
    )

    const secondImg = () => (
      <Img
        fluid={img2}
        key={product.node.images[0].localFile.id}
        fadeIn={false} 
        // loading="eager"
        alt={product.node.title}
      />
    )
    

    return (
        <ProductShopCard 
          onMouseEnter={() => setImg(false)}  
          onMouseLeave={() => setImg(true)}  
          key={product.node.title}>
            <a href={`/product/${product.node.handle}`} >
                {img ? firstImg() : secondImg()}
                {/* <Img
                    fluid={img}
                    key={product.node.images[0].localFile.id}
                    fadeIn={false} 
                    loading="eager"
                    alt={product.node.title}
                /> */}
                <ProductTitle>{product.node.title}</ProductTitle>
                <ProductPrice>
                    ${product.node.variants[0].price}
                </ProductPrice>
            </a>
        </ProductShopCard>
    );
};

export default ProductBox;