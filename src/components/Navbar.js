import React, { useState, useEffect } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { FaHome, FaUser, FaBriefcase, FaPenAlt } from "react-icons/fa";

const navlinks = [
  { label: "Home", icon: FaHome, link: "/", active: false },
  { label: "About", icon: FaUser, link: "/about", active: false },
  { label: "Projects", icon: FaBriefcase, link: "/projects", active: false },
  { label: "Blog", icon: FaPenAlt, link: "/blog", active: false },
];

export default () => {
  const [menuItems, setMenuItems] = useState([]);
  const [pageY, setPageY] = useState(0);
  const [visible, setVisible] = useState(true);

  /* Populate menu / highlight active page */
  useEffect(() => {
    const path = decodePath(window.location.pathname);

    setMenuItems(
      navlinks.map((item, i) => (
        <Link
          key={i}
          to={item.link}
          alt={item.label}
          className={item.link === path && "active"}
        >
          <NavbarItem>
            <NavbarIcon>
              <item.icon />
            </NavbarIcon>
            <NavbarLabel>{item.label}</NavbarLabel>
          </NavbarItem>
        </Link>
      ))
    );
  }, []);

  /* Auto-hide navbar */
  useEffect(() => {
    const handleScroll = () => {
      const currentPageY = window.pageYOffset;

      setPageY(prev => {
        const visible = prev > currentPageY;
        setVisible(visible);
        return currentPageY;
      });
    };

    // Register event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Position className={!visible && "hide"}>
      <Navbar>{menuItems}</Navbar>
    </Position>
  );
};

const decodePath = (pathname = "") => "/" + pathname.split("/")[1];

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
    &:hover li,
    &:focus li,
    &.active li {
      color: var(--color-primary);
      background-color: var(--color-bg);
    }
  }

  @media (max-width: 575.98px) {
    &.active div::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      --dot-size: 5px;
      content: "";
      display: block;
      width: var(--dot-size);
      height: var(--dot-size);
      margin: 0.2rem auto 0 auto;
      border-radius: var(--dot-size);
      background-color: white;
    }

    &:hover span,
    &:focus span {
      opacity: 100;
      visibility: visible;
      transform: translate(-50%, -4.5rem);
    }
  }
`;

const NavbarItem = styled.li`
  position: relative;
  margin: 0 1rem;
  padding: 0.8rem;
  border-radius: var(--navbar-height);

  transition: background-color 500ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const NavbarIcon = styled.div`
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
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -4rem);
    padding: 0.3rem 0.7rem;

    color: white;
    font-size: 0.8rem;
    border-radius: 0.2rem;
    font-weight: normal;

    background-color: var(--color-secondary);
    transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
      opacity 500ms cubic-bezier(0.16, 1, 0.3, 1);

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;

      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid var(--color-secondary);

      left: 50%;
      transform: translateX(-50%);
      bottom: -0.5rem;
    }
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
