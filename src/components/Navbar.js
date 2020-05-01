import React from "react";
import styled from "styled-components";

export default ({ ...rest }) => {
  return (
    <Navbar {...rest}>
      <div className="container" style={{ display: "flex" }}>
        <NavbarIcon>K</NavbarIcon>
        <NavbarNav style={{ marginLeft: "auto" }}>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
        </NavbarNav>
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
`;

const NavbarNav = styled.ul`
  height: var(--navbar-height);
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: var(--navbar-height);

  display: flex;
  align-items: center;

  color: white;
  background-color: var(--color-primary);

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const NavbarItem = styled.li`
  margin: 0 1.5rem;
`;

const NavbarIcon = styled.div`
  width: var(--navbar-height);
  height: var(--navbar-height);
  border-radius: var(--navbar-height);
  font-size: 24px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: var(--color-primary);
`;
