import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Footer from "../components/footer"
import Provider from "../context/provider"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header"
import "./layout.sass";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: DINPro-Regular;
    color: black;
  }
`

const Layout = ({ children }) => {
    return (
        <Provider>
            <StaticQuery
                query={graphql`
                    query {
                        site {
                            siteMetadata {
                                title
                                description
                                author
                                socialLinks {
                                    name
                                    link
                                }
                                primaryNav {
                                    name
                                    link
                                }
                                secondaryNav {
                                        name
                                        link
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <React.Fragment>
                        <Header siteTitle={data.site.siteMetadata.title} />
                        <GlobalStyle />
                        {children}
                        <Footer />
                    </React.Fragment>
                )}
            />
        </Provider>
    );
};

export default Layout;

