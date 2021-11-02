import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "interfaces";

import Products from "components/Products";

const ShoppingPage = () => {
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <React.Fragment>
      <Products items={products} />
    </React.Fragment>
  );
};

export default ShoppingPage;
