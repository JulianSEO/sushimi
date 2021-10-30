import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "theme";
import { store } from "store";

import Layout from "components/Layout";
import HomePage from "pages/Home";
import ShoppingPage from "pages/Shop";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
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
      </Provider>
    </React.Fragment>
  );
};

export default App;
