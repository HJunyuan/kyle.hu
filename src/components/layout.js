/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
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
    <div className="d-flex flex-column">
      <Navbar />
      <main className="container flex-grow-1">{children}</main>
      <footer className="container flex-grow-0">
        {`© ${data.site.siteMetadata.title} ${new Date().getFullYear()}`}
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
