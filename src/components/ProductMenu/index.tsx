import React, { useState } from "react";
import { Container, Tabs, Tab } from "@mui/material";

const ProductMenu = () => {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <Container>
        <Tabs
          centered
          variant="fullWidth"
          onChange={(_, value) => setValue(value)}
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab value={0} label="Суши" />
          <Tab value={1} label="Маки" />
          <Tab value={2} label="Пицца" />
          <Tab value={3} label="Wok" />
          <Tab value={4} label="Напитки" />
        </Tabs>
      </Container>
    </React.Fragment>
  );
};

export default ProductMenu;
