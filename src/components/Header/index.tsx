import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingBasket } from "@mui/icons-material";

import Logo from "components/Logo";

const Header = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary" sx={{ padding: "15 100px" }}>
          <Toolbar>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <ShoppingBasket />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Header;
