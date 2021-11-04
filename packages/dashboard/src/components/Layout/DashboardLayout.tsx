import React from "react";
import { Box } from "@mui/system";

import ApplicationBar from "components/ApplicationBar";

const DashboardLayout = (props: any) => {
  return (
    <React.Fragment>
      <Box>
        <ApplicationBar />
        {props.children}
      </Box>
    </React.Fragment>
  );
};

export default DashboardLayout;
