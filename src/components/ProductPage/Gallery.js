import React, {useState} from 'react';
import Img from "gatsby-image"
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ImgWrapper = styled.div`
    height: 40vh;
    width: 100%;
    overflow: hidden;
    position: relative;
`

const ThumbnailBox = styled(Box)(() => ({
    transition: '0.5s ease all',
    cursor: 'pointer',
}));

const ThumbnailFlex = styled(Flex)(() => ({
    transition: '0.5s ease all',
}));

const NextImageIcon = styled(IoIosArrowForward)(() => (`
    position: absolute;
    height: 50px;
    width: 50px;
    z-index: 1;
    right: 20px;
    top: 150px
`))

const PrevImageIcon = styled(IoIosArrowBack)(() => (`
    position: absolute;
    height: 50px;
    width: 50px;
    z-index: 1;
    left: 20px;
    top: 150px
`))

const Gallery = ({ product }) => { 

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(product.images[currentIndex]);

    const nextImage = () => {
        currentIndex === product.images.length - 1 ? setCurrentIndex(0) :
        setCurrentIndex(currentIndex + 1);
        setCurrentImage(product.images[currentIndex])
    }

    const prevImage = () => {
        currentIndex === 0 ? setCurrentIndex(product.images.length - 1) :
        setCurrentIndex(currentIndex - 1);
        setCurrentImage(product.images[currentIndex])
    }

    return (
        <>
            <ImgWrapper>
                <NextImageIcon onClick={e => nextImage()}/>
                <Img
                    fluid={currentImage.localFile.childImageSharp.fluid}
                    key={currentImage.localFile.id}
                    alt={product.title}
                    // fadeIn={false} 
                    // loading="eager"
                    // className="imgProduct"
                />
                <PrevImageIcon onClick={e => prevImage()}/>
            </ImgWrapper>
            {/* </Box> */}
        </>
    );
};

export default Gallery;