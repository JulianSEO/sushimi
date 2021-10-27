import React from "react";

import mock from "config/mock";

import Products from "components/Products";

const ShoppingPage = () => {
  return (
    <React.Fragment>
      <Products items={mock.items} />
    </React.Fragment>
  );
};

export default ShoppingPage;
