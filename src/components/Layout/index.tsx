import React from "react";
import { Container, Grid } from "@mui/material";

import Header from "components/Header";

import mock from "config/mock";
import ProductCard from "components/ProductCard";

const Layout = (props: any) => {
  return (
    <React.Fragment>
      <Header />
      <Container sx={{ paddingTop: "48px" }}>
        <div>
          <Grid container spacing={2}>
            {mock.items.map((item, index) => {
              return (
                <Grid item xs={12} md={4} key={index}>
                  <ProductCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
      {props.child}
    </React.Fragment>
  );
};

export default Layout;
