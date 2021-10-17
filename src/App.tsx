import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "theme";

import Header from "components/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
