import { Link } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#24252a" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", textAlign:"left" }}
        >
          SwiftList
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "white", textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/todo"
            sx={{ color: "white", textTransform: "none" }}
          >
            Todo
          </Button>
          <Button
            component={Link}
            to="/graphs"
            sx={{color: "white", textTransform: "capitalize"}}>
              Analysis
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: "white", textTransform: "none" }}
          >
            Contact us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
