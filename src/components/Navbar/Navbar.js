import React, { useContext, useState, useEffect } from 'react'
import styled from "styled-components"
import NavbarLinks from "../Navbar/NavbarLinks"
import Logo from "./Logo"
import { Link } from "gatsby" /* eslint-disable */
import PropTypes from "prop-types"
import StoreContext from '../../context/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FaSearch } from "react-icons/fa";
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  });
  return quantity
}

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row-reverse;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 3px solid black;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    flex-direction: row;
    position: sticky;
    height: 10vh;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    width: 30vw
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    z-index: 2;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  margin-left: 5vw;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const NavItems = styled.div`
  display: none;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5vw;
    width: 30vw;
  }
`

const NavbarItem = styled.div`
  display: block;
  padding: .5rem .4rem;
  position: relative;

  @media (max-width: 768px) {
    
  }
`

const Search = styled(FaSearch)(() => (`
    color: black
`))

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const context = useContext(StoreContext)
  const { checkout } = context.store
  const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
    closeSearchBar();
    console.log("close navbar effect")
  }, [checkout]);

  const openSearchBar = () => {
    setModal(true)
  }
  const closeSearchBar = () => {
    setModal(false)
  }

  const closeNav = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
      <Navigation>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks func={closeNav} />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
        <Logo />
        <NavItems>
            <NavbarItem>
              <Search className="has-text-dark is-size-5" onClick={openSearchBar} />
            </NavbarItem>
            {/* <NavbarItem>
              <Link aria-label="cart" to="/account/login">
                <FontAwesomeIcon icon={faUser} className="is-size-5 has-text-dark" />
              </Link>
            </NavbarItem> */}
            <NavbarItem>
              <Link aria-label="cart" to="/cart">
                {
                  quantity > 0 ?
                  <>
                    <div className="shopping-bag-quantity">{quantity}</div>
                    <FontAwesomeIcon icon={faShoppingBag} className="is-size-5 has-text-dark" />
                  </>
                    :
                    <FontAwesomeIcon icon={faShoppingBag} className="is-size-5 has-text-dark" />
                }
              </Link>
            </NavbarItem>
          </NavItems>
      </Navigation>
      <div className={` ${modal === true ? "modal is-active" : "modal"}`}>
          <div className="modal-background" onClick={closeSearchBar}></div>
          <div className="modal-content">
            <div className="field">
              <div className="control has-icons-right">
                <form action="../search" method="GET">
                  <input className="input is-large" name="value" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
                  <span className="icon is-right">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <label className="has-text-white">ENTER ↵</label>
                </form>
              </div>
            </div>
          </div>
        <button className="modal-close is-large" onClick={closeSearchBar} aria-label="close"></button>
      </div>
    </>
  )
}

export default Navbar