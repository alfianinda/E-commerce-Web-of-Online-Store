import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import setToken from "./helpers/setToken";

import HomePage from "./components/views/HomePage";
import LoginPage from "./components/views/LoginPage";
import RegisterPage from "./components/views/RegisterPage";
import DetailPage from "./components/views/DetailPage";
import CheckoutPage from "./components/views/CheckoutPage";
import CardPage from "./components/views/CartPage";

class App extends Component {
  render() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/detail/:id" exact component={DetailPage} />
            <Route path="/cart" exact component={CardPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
