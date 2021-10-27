import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Container, Breadcrumbs, Button } from "@mui/material";

import { StyledHeroContainer } from "./styles";

const Subheader = () => {
  return (
    <React.Fragment>
      <StyledHeroContainer>
        <Container>
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <Breadcrumbs sx={{ color: "#c7c8cc" }}>
              <Button color="inherit" component={Link} to="/">
                Главная
              </Button>
              <Button color="inherit" component={Link} to="/shop">
                Меню
              </Button>
            </Breadcrumbs>
          </Box>
          <Typography variant="h1" color="#fff">
            Меню
          </Typography>
        </Container>
      </StyledHeroContainer>
    </React.Fragment>
  );
};

export default Subheader;
