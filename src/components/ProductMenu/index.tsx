import React from "react";
import { Container, Paper, Tabs, Tab } from "@mui/material";

const ProductMenu = () => {
  return (
    <React.Fragment>
      <Paper square>
        <Container>
          <Tabs
            centered
            value={0}
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="Суши" />
            <Tab label="Пицца" />
            <Tab label="Wok" />
          </Tabs>
        </Container>
      </Paper>
    </React.Fragment>
  );
};

export default ProductMenu;
