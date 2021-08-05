import {
  Nav,
  NavLogo,
  NavMenu,
  NavToggle,
  NavItem,
  NavLink,
  NavList,
  NavClose,
  Header,
} from "./NavbarStyle"
import {
  FaBars,
  FaHome,
  FaTshirt,
  FaShirtsinbulk,
  FaPortrait,
  FaTimes,
} from "react-icons/fa"

import { useState } from "react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Header>
      <Nav>
        <NavLogo to="/">yeet</NavLogo>
        <NavMenu toggle={toggle}>
          <NavList>
            <NavItem>
              <NavLink to="/" onClick={handleToggle}>
                <FaHome />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products" onClick={handleToggle}>
                <FaTshirt />
                All Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/limited" onClick={handleToggle}>
                <FaShirtsinbulk />
                Limited Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={handleToggle}>
                <FaPortrait />
                About Us
              </NavLink>
            </NavItem>
          </NavList>
          <NavClose onClick={handleToggle}>
            <FaTimes />
          </NavClose>
        </NavMenu>
        <NavToggle onClick={handleToggle} toggle={toggle}>
          <FaBars />
        </NavToggle>
      </Nav>
    </Header>
  )
}

export default Navbar
