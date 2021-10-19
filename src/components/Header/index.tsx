import React from "react";
import { AppBar, Badge, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingBasket } from "@mui/icons-material";

import Logo from "components/Logo";
import { StyledCart, StyledToolBar } from "./styles";
import ProductMenu from "components/ProductMenu";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Container>
          <StyledToolBar>
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
          </StyledToolBar>
        </Container>
      </AppBar>
      <ProductMenu />
    </React.Fragment>
  );
};

export default Header;
