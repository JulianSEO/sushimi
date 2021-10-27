import React from "react";
import { Box } from "@mui/material";

import Header from "components/Header";
import Subheader from "components/Subheader";

const Layout = (props: any) => {
  return (
    <React.Fragment>
      <Box>
        <Header />
        <Subheader />
        {props.children}
      </Box>
    </React.Fragment>
  );
};

export default Layout;
