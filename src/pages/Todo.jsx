import React from "react";
import Box from "@mui/material/Box";

const Todo =()=>{

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
            this is todo list
            can add, edit and delete the 
            also assign priority level for each tasks "Optional
        </div>
        </Box>
    )

}
export default Todo;