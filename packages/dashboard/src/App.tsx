import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "theme";
import { DashboardLayout } from "components/Layout";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout></DashboardLayout>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
