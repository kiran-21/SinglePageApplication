/******************************************************************************************
 * Project: Trends in Web Technology - Group Project
 * File: Container.jsx
 * Author: Pablo Maldonado
 * Description: This component it allows to contain others components
 ******************************************************************************************/

import React from "react";
import Box from "@mui/material/Box";

const Container = ({ children }) => {
	return (
		<Box
			sx={{
				minHeight: "80vh",
				padding: "20px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-start",
				backgroundColor: "#FFFFFF",
			}}
		>
			{children}
		</Box>
	);
};

export default Container;
