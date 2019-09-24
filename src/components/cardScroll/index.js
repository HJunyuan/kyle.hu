import React from "react";

import styles from "./cardScroll.module.css";

export default function CardScroll({ children }) {
	return <div className={styles.container}>{children}</div>;
}
