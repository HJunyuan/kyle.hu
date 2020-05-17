import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default ({ ...rest }) => {
  return (
    <Navbar {...rest}>
      <div className="container" style={{ display: "flex" }}>
        <Link to="/">
          <NavbarIcon>
            <span>K</span>
          </NavbarIcon>
        </Link>
        {/* <NavbarNav style={{ marginLeft: "auto" }}>
          <Link to="/about">
            <NavbarItem>About</NavbarItem>
          </Link>
          <Link to="/">
            <NavbarItem>Projects</NavbarItem>
          </Link>
          <Link to="/">
            <NavbarItem>Blog</NavbarItem>
          </Link>
        </NavbarNav> */}
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  margin-top: calc(var(--spacing) / 2);
  margin-bottom: calc(var(--spacing) / 2);
  z-index: 100;

  a,
  a:hover {
    color: white;
    text-decoration: none;
  }
`;

// const NavbarNav = styled.ul`
//   height: var(--navbar-height);
//   font-weight: bold;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   border-radius: var(--navbar-height);

//   display: flex;
//   align-items: center;

//   background-color: var(--color-primary);

//   @media screen and (max-width: 576px) {
//     display: none;
//   }
// `;

// const NavbarItem = styled.li`
//   margin: 0 1rem;
//   padding: 0.8rem;
//   border-radius: var(--navbar-height);

//   transition: background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

//   :hover {
//     color: var(--color-primary);
//     background-color: var(--color-bg);
//   }
// `;

const NavbarIcon = styled.div`
  width: var(--navbar-height);
  height: var(--navbar-height);
  border-radius: var(--navbar-height);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: var(--color-primary);

  span {
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :hover span {
    transform: scale(2);
  }
`;
