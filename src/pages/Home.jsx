import React from "react";
import Box from "@mui/material/Box";

const Home =()=>{
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
        <div>
            this is Welome page
        </div>
        </Box>
        
    )
}
export default Home;