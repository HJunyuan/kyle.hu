import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <View>
      <Navbar />
      <Main className="container">{children}</Main>
      <footer className="container">
        {`© ${data.site.siteMetadata.title} ${new Date().getFullYear()}`}
      </footer>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const View = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  margin-top: calc(var(--navbar-height) + var(--spacing));
`;
