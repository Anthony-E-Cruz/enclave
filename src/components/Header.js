import React, { useContext, useState, useEffect } from 'react'
import styled from "styled-components"
import NavbarLinks from "../components/Navbar/NavbarLinks"
import Logo from "../components/Navbar/Logo"
import { Link } from "gatsby" 
import PropTypes from "prop-types"
import StoreContext from '../context/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";

config.autoAddCss = false

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  });
  return quantity
}

const Search = styled(FaSearch)(() => (`
  color: black;
  width: 20px;
  height: 20px
`))

const User = styled(FaUserAlt)(() => (`
  color: black;
  width: 20px;
  height: 20px
`))

const Cart = styled(FaShoppingCart)(() => (`
  color: black;
  width: 20px;
  height: 20px
`))

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row-reverse;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 3px solid black;
  margin: 0 auto;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    flex-direction: row;
    position: sticky;
    height: 10vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
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

const CartWrapper = styled.div`
  
`

const SearchModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 5vh;
  }
`

const ShoppingBagQuantity = styled.div`
  position: absolute;
  top: -2px;
  right: -3px;
  width: 15px;
  box-sizing: content-box;
  height: 15px;
  text-align: center;
  color: white;
  font-size: 10px;
  line-height: 15px;
  background-color: red;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  border-image: initial;
  border-radius: 20px
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  width: 40vw;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    margin-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
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
    width: 30vw;
    padding-right: .5vw
  }
`

const NavbarItem = styled.div`
  display: block;
  padding: .5rem .4rem;
  position: relative;

  @media (max-width: 768px) {
    
  }
`

const SearchBar = styled.div`

  margin: .5rem;
  width: 85%;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    height: 5vh;
    margin: .5rem;
    color: black
  }
`

const SearchInput = styled.input`

  @media (max-width: 768px) {
    height: 5vh;
  }
`

const SearchSpan = styled.span`

  @media (max-width: 768px) {
    height: 5vh !important;
  }
`

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 5;

  @media (max-width: 768px) {
    
  }
`

const FullScreenPaceholder = styled.div`
  min-width: 40vw;

  @media (max-width: 768px) {
    display: none;
  }
`

const Header = () => {
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

  const toggleSearchBar = () => {
    modal ? setModal(false) : setModal(true);
  };

  const closeSearchBar = () => {
    setModal(false)
  };

  const closeNav = () => {
    setNavbarOpen(!navbarOpen)
  };

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
            <NavbarLinks toggleSearchBar={toggleSearchBar} func={closeNav} />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks toggleSearchBar={toggleSearchBar} func={closeNav} count={quantity} />
          </Navbox>
        )}
        <Logo />
        <NavItems>
            <NavbarItem>
              <Search onClick={toggleSearchBar} icon={faSearch} />
            </NavbarItem>
            <NavbarItem>
              <Link aria-label="cart" to="/account/login">
                <User  />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link aria-label="cart" to="/cart">
                {
                  quantity > 0 ?
                  <CartWrapper>
                    <ShoppingBagQuantity>{quantity}</ShoppingBagQuantity>
                    <Cart  />
                  </CartWrapper>
                    :
                    <Cart  />
                }
              </Link>
            </NavbarItem>
          </NavItems>
          <FullScreenPaceholder />
      </Navigation>
      {modal ? 
        <SearchModal>
            {/* <ModalBackground onClick={closeSearchBar}></ModalBackground> */}
            {/* <div className="modal-content"> */}
            {/* <div className="field"> */}
            <SearchBar className="control has-icons-right">
              <form action="../search" method="GET">
                <SearchInput 
                  className="input is-large" 
                  name="value" 
                  type="text" 
                  value={search} 
                  onChange={e => setSearch(e.target.value)} 
                  placeholder="Search" 
                  />
                <SearchSpan className="icon is-right">
                  <FontAwesomeIcon icon={faSearch} />
                </SearchSpan>
                {/* <label className="has-text-black">ENTER ↵</label> */}
              </form>
            </SearchBar>
            {/* </div> */}
            {/* </div> */}
          {/* <button className="modal-close is-large" onClick={closeSearchBar} aria-label="close"></button> */}
        </SearchModal> : null
      }
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header