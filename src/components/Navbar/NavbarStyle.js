import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
    position: sticky;
  }
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

  @media screen and (min-width: 786px) {
    margin-left: auto;
    margin-right: auto;
    height: calc(3rem + 1.5rem);
    column-gap: 1rem;
  }
`

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 350px) {
    column-gap: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 2rem;
  }
`

export const Logo = styled.img`
  height: 50px;
  width: 50px;
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

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavMenu = styled.div`
  @media screen and (max-width: 350px) {
    padding: 2rem 0.25rem 4rem;
  }

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

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`

export const NavItem = styled.li`
  &:hover {
    border-bottom: 3px solid red;
  }
`

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
  @media screen and (min-width: 768px) {
    display: none;
  }
`
