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
      <Typography variant="body2" sx={{ marginTop: "10px" }}>
        © 2024 Single Page Application. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
