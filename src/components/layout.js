/**
 * Layout component. Inlcudes
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Header from "./header";
import Footer from "./footer";

import "typeface-poppins";
import "typeface-source-sans-pro";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

export default function Layout({ children, noNav }) {
	return (
		<React.Fragment>
			{noNav ? null : <Header />}
			<Container className="pt-4">{children}</Container>
			<Footer />
		</React.Fragment>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
