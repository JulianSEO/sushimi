import React from "react";
import { AppBar, Container, Toolbar, Box } from "@mui/material";

const ApplicationBar = () => {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        color="primary"
        elevation={10}
      >
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default ApplicationBar;
