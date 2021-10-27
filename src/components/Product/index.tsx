import React from "react";
import { Typography, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { StyledDescription, StyledPrice, StyledProduct } from "./styles";

const Product = (props: any) => {
  return (
    <React.Fragment>
      <StyledProduct>
        <img src={props.item.url} />
        <StyledDescription>
          <Typography
            className="title"
            gutterBottom
            variant="h6"
            component="h6"
          >
            {props.item.title}
          </Typography>
          <div className="product-info">
            <span className="info-tag">300 g</span>
            <span className="info-tag">8 pieces</span>
            <span className="info-tag">420 kcal</span>
          </div>
          <p className="description">{props.item.description}</p>
        </StyledDescription>
        <StyledPrice>
          <div className="price">{props.item.price} MDL</div>
          <IconButton className="basket" color="secondary">
            <ShoppingCart />
          </IconButton>
        </StyledPrice>
      </StyledProduct>
    </React.Fragment>
  );
};

export default Product;