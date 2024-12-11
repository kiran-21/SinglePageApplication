import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#24252a",
        padding: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">Student Names & Student Number</Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
        © 2024 Single Page Application
      </Typography>
    </Box>
  );
};

export default Footer;
