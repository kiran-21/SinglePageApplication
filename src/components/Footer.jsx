import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#24252a",
				padding: "20px",
				color: "white",
				textAlign: "center",
				borderTop: "2px solid #3e3f44",
			}}
		>
			<Typography variant="body1" sx={{ marginTop: "10px" }}>
				Trends in Web Technology | FALL2024 | Sec5 | Group Project
			</Typography>
			<Typography variant="body2" sx={{ marginTop: "10px" }}>
				Group #3 <br />
				Pablo Maldonado Blanche <br />
				Nidhi Chhaganbhai Pansuriya <br />
				Kiran Saraswathy Bhavanam Radhakrishnan<br />
				Kanwar Digvijay Singh
			</Typography>
		</Box>
	);
};

export default Footer;
