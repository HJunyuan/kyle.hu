import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";

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
    <Grid className="container" {...rest}>
      {/* <Navbar /> */}
      <main>{children}</main>
      <footer>{`© ${new Date().getFullYear()}, ${
        data.site.siteMetadata.title
      }. All rights reserved.`}</footer>
    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  > main {
    margin-top: 1rem;
  }

  @media (min-width: 576px) {
    > main {
      margin-top: calc(var(--navbar-height) + 2 * var(--spacing));
    }
  }

  > footer {
    text-align: center;
    margin: 1rem 0;
  }
`;

export default Layout;
