import React from "react";
import Box from "@mui/material/Box";

const ContactUs = ()=>{

    return(
        <Box
        sx={{
          minHeight: "80vh",
          padding: "20px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "flex-start", 
          backgroundColor: "#f5f5f5", 
        }}
      >
        <div className="container">
            This is ContactUs page,
        </div>
        </Box>
    )
}
export default ContactUs;