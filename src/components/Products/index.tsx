import React from "react";
import { Container, Grid } from "@mui/material";
import Product from "components/Product";

const Products = (props: any) => {
  const items = props.items;

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4} marginTop={0}>
          {items &&
            items.map((item, index) => (
              <Grid xs={12} md={4} item key={index}>
                <Product item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Products;
