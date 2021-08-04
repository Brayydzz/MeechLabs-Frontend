import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from "./NavbarStyle"
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
    return (
        <>
           <Nav>
               <NavContainer>
                   <NavLogo to="/">yeet</NavLogo>
                   <MobileIcon>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLink to="/">Home</NavLink>
                       </NavItem>
                           <NavItem>
                               <NavLink to="/products">All Products</NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink to="/limited">Limited Products</NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink to="/about">About Us</NavLink>
                           </NavItem>
                   </NavMenu>
               </NavContainer>
           </Nav>
        </>
    )
}

export default Navbar
