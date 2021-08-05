import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
`

export const Nav = styled.nav`
  max-width: 968px;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (max-width: 350px) {
  }
`

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const NavLogo = styled(Link)`
  &:hover {
    color: red;
  }
`

export const NavToggle = styled.div`
  cursor: pointer;
  display: ${({ toggle }) => (!toggle ? "block" : "none")};
  font-size: 1.1rem;
  &:hover {
    color: red;
  }
`

export const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: ${({ toggle }) => (toggle ? "0" : "-100%")};
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
`

export const NavItem = styled.li``

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: red;
  }
`
export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`
