import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import ApplicationBar from "components/ApplicationBar";
import Sidebar from "components/Sidebar";

const DashboardLayout = (props: any) => {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <ApplicationBar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DashboardLayout;
