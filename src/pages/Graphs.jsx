import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Graphs =()=>{
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
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Graph Overview
        </Typography>
        <Typography variant="body1">
          This is the Graph page showing tasks in a Pie chart or another chart for a quick review.
        </Typography>
          <Typography variant="body2" color="textSecondary">
            Chart will be displayed here
          </Typography>
      </Box>
  
    )
}
export default Graphs;