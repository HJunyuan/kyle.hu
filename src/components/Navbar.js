import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { FaHome, FaUser, FaBriefcase, FaPenAlt } from "react-icons/fa";

const menuItems = [
  { label: "Home", icon: FaHome, link: "/" },
  { label: "About", icon: FaUser, link: "/about" },
  { label: "Projects", icon: FaBriefcase, link: "/projects" },
  { label: "Blog", icon: FaPenAlt, link: "/blog" },
];

export default props => {
  return (
    <Position>
      <Navbar>
        {menuItems.map((item, i) => (
          <Link key={i} to={item.link}>
            <NavbarItem key={i}>
              <NavbarIcon>
                <item.icon />
              </NavbarIcon>
              <NavbarLabel>{item.label}</NavbarLabel>
            </NavbarItem>
          </Link>
        ))}
      </Navbar>
    </Position>
  );
};

const Position = styled.nav`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: calc(var(--spacing) / 2);
  margin-bottom: calc(var(--spacing) / 2);
  z-index: 100;

  @media (max-width: 575.98px) {
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    transform: none;
  }
`;

const Navbar = styled.ul`
  height: var(--navbar-height);
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  border-radius: var(--navbar-height);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--color-primary);

  @media (max-width: 575.98px) {
    border-radius: 0;
  }
`;

const Link = styled(GatsbyLink)`
  color: white;
  text-decoration: none !important;

  @media (min-width: 576px) {
    :hover li,
    :focus li,
    :active li {
      color: var(--color-primary);
      background-color: var(--color-bg);
    }
  }

  @media (max-width: 575.98px) {
    :hover span::after,
    :focus span::after,
    :active span::after {
      --dot-size: 5px;
      content: "";
      display: block;
      width: var(--dot-size);
      height: var(--dot-size);
      margin: 0.2rem auto 0 auto;
      border-radius: var(--dot-size);
      background-color: white;
    }
  }
`;

const NavbarItem = styled.li`
  margin: 0 1rem;
  padding: 0.8rem;
  border-radius: var(--navbar-height);

  transition: background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

const NavbarIcon = styled.span`
  color: white;
  font-size: 1.7rem;
  line-height: 1rem;

  @media (min-width: 576px) {
    display: none;
  }
`;

const NavbarLabel = styled.span`
  color: inherit;

  @media (max-width: 575.98px) {
    display: none;
  }
`;

/* <Link to="/">
  <NavbarIcon>
    <span>K</span>
  </NavbarIcon>
</Link> */
// const NavbarIcon = styled.div`
//   width: var(--navbar-height);
//   height: var(--navbar-height);
//   border-radius: var(--navbar-height);
//   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//     "Lucida Sans", Arial, sans-serif;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   color: white;
//   background-color: var(--color-primary);

//   span {
//     transform: scale(1);
//     transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//   }

//   :hover span {
//     transform: scale(2);
//   }
// `;
