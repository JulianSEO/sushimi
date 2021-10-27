import React from "react";
import { AppBar, Badge, Container, Toolbar, Box } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

import Logo from "components/Logo";

import { StyledCart } from "./styles";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" elevation={10}>
        <Container sx={{ padding: "12px 0px" }}>
          <Toolbar disableGutters>
            <Box>
              <a href="/">
                <Logo />
              </a>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <StyledCart>
                <Badge color="secondary" badgeContent={3}>
                  <ShoppingBasket sx={{ fontSize: "32px" }} />
                </Badge>
                <div className="text">
                  <div className="title">Корзина</div>
                  <div className="price">700 MDL</div>
                </div>
              </StyledCart>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
