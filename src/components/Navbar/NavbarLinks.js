import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { func } from "prop-types"

const NavItemsWrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: 700;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavHomeItem = styled(Link)`
  display: none;
  font-weight: 700;

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    text-decoration: none;
    color: #111;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;

    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: goldenrod;
      height: 1px;
      transition: all 0.4s ease-in;
    }

    :hover {
      color: goldenrod;
      ::after {
        width: 100%;
      }
    }
  }
`

const NavSearchItem = styled.div`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: 700;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = props => {
  return (
    <NavItemsWrapper>
      <NavHomeItem onClick={() => func()} to="/">Home</NavHomeItem>
      <NavSearchItem onClick={() => props.toggleSearchBar()}>Search</NavSearchItem>
      <NavItem onClick={() => func()} to="/shop">Shop</NavItem>
      <NavItem onClick={() => func()} to="/about">About</NavItem>
      <NavItem onClick={() => func()} to="/cart">Cart ({props.count})</NavItem>
    </NavItemsWrapper>
  )
}

export default NavbarLinks