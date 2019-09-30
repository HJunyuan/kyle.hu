import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Header from "../header";
import Footer from "../footer";

import "../../scss/custom.scss";

export default function Layout({ children, noNav, noContainer, noFooter }) {
	return (
		<React.Fragment>
			{noNav ? null : <Header />}
			<main>{noContainer ? children : <Container>{children}</Container>}</main>
			{noFooter ? null : <Footer />}
		</React.Fragment>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
