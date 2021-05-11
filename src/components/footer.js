import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const FooterWrapper = styled.footer`
    padding: 2rem 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: center;
`

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
`

const Text = styled.p`
    text-align: center;
`

const MediaLink = styled.a`
    text-decoration: none;
    color: black;
`

const GatsbyLink = styled(Link)(() => (`
    text-decoration: none;
    color: black;
    margin: .5rem;
    margin-top: 0;
`))

const Instagram = styled(FaInstagram)(() => (`
    margin: .5rem
`))

const Twitter = styled(FaTwitter)(() => (`
    margin: .5rem
`))

const Facebook = styled(FaFacebookSquare)(() => (`
    margin: .5rem
`))

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialMediaIcons>
                <MediaLink href="https://www.instagram.com/enclaveshop/?hl=en" target="_blank">
                    <Instagram />
                </MediaLink>
                <MediaLink href="https://twitter.com/enclaveshop" target="_blank">
                    <Twitter />
                </MediaLink>
                <MediaLink href="https://m.facebook.com/Enclaveshop/" target="_blank">
                    <Facebook />
                </MediaLink>
            </SocialMediaIcons>
            <FooterLinks>
                <GatsbyLink to="/about">About</GatsbyLink>
                <GatsbyLink to="/shop">Shop</GatsbyLink>
                <GatsbyLink to="/editorial">Editorial</GatsbyLink>
            </FooterLinks>
            <Text>© 2021 - EnclaveShop</Text>
        </FooterWrapper>
    );
};

export default Footer;