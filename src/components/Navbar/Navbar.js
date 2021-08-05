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
  Logo,
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
        <NavLogo to="/">
          <Logo src="images/meechlogo.png" />
        </NavLogo>
        <NavMenu toggle={toggle}>
          <NavList>
            <NavItem>
              <NavLink to="/" onClick={handleToggle}>
                <FaHome className="icon" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products" onClick={handleToggle}>
                <FaTshirt className="icon" />
                All Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/limited" onClick={handleToggle}>
                <FaShirtsinbulk className="icon" />
                Limited Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={handleToggle}>
                <FaPortrait className="icon" />
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
