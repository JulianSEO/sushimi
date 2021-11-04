import React from "react";
import { Box } from "@mui/material";

import ApplicationBar from "components/ApplicationBar";
import Sidebar from "components/Sidebar";

const DashboardLayout = (props: any) => {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <ApplicationBar />
        <Sidebar />
        {props.children}
      </Box>
    </React.Fragment>
  );
};

export default DashboardLayout;
