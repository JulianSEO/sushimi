import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "theme";
import Layout from "components/Layout";
import HomePage from "pages/Home";
import ShoppingPage from "pages/Shop";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Switch>
              <Route path="/shop">
                <ShoppingPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
