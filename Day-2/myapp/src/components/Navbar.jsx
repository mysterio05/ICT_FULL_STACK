import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h3>MY APP</h3>&nbsp;&nbsp;
          <Link to="/login">
            <Button variant="contained" color="inherit">
              Login
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/">
            <Button variant="contained" color="inherit">
              Signup
            </Button>
          </Link>&nbsp;&nbsp;

          <Link to="/state">
            <Button variant="contained" color="inherit">STATES</Button>
          </Link>&nbsp;&nbsp;
          
          <Link to="/counter">
            <Button variant="contained" color="inherit">Counter</Button>
          </Link>&nbsp;&nbsp;
          
           <Link to="/welcome">
            <Button variant="contained" color="inherit">Welcome</Button>
          </Link>&nbsp;&nbsp;

            
           <Link to="/api">
            <Button variant="contained" color="inherit">API</Button>
          </Link>&nbsp;&nbsp;
          
          
           <Link to="/product">
            <Button variant="contained" color="inherit">Product</Button>
          </Link>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
