import * as React from 'react';
import "./index.css";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * NavigationBar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
    return(
        <AppBar className="navbar" position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Levi's Online Store
          </Typography>
        </Toolbar>
      </AppBar>

    );
};

export default NavigationBar; 