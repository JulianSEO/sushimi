import React from "react";
import { Container, Grid } from "@mui/material";

import { Product } from "interfaces";
import ProductComponent from "components/Product";

type Props = {
  items: Product[];
};

const Products = (props: Props) => {
  const { items } = props;

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4} marginTop={0} marginBottom={4}>
          {items.map((item, index) => (
            <Grid xs={12} md={4} item key={index}>
              <ProductComponent item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Products;
