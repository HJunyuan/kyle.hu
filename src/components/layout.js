import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";

import "typeface-open-sans";
import "typeface-raleway";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Layout = ({ children, ...rest }) => {
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
    <View {...rest}>
      <Navbar />
      <Main className="container">{children}</Main>
      <footer className="container">
        {`© ${new Date().getFullYear()}, ${
          data.site.siteMetadata.title
        }. All rights reserved.`}
      </footer>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const View = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

  footer {
    text-align: center;
    margin: 1.5rem auto;
    font-size: 0.8rem;
  }
`;

const Main = styled.main`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  margin-top: calc(var(--navbar-height) + var(--spacing));
`;
