import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "theme";

import Layout from "components/Layout";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/">
              <Layout />
            </Route>
            <Route path="*">
              <Layout />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
