import React from "react";
import { Typography, Box, Container, Breadcrumbs, Link } from "@mui/material";

import { StyledHeroContainer } from "./styles";

const Subheader = () => {
  return (
    <React.Fragment>
      <StyledHeroContainer>
        <Container>
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <Breadcrumbs sx={{ color: "#c7c8cc" }}>
              <Link href="/" color="inherit">Главная</Link>
              <Link href="/shop" color="inherit">Меню</Link>
            </Breadcrumbs>
          </Box>
          <Typography variant="h1" color="#fff">Меню</Typography>
        </Container>
      </StyledHeroContainer>
    </React.Fragment>
  );
};

export default Subheader;
