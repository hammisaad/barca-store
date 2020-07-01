import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";

import { HomePage } from "./pages/home-page/homepage.component";
import Shop from "./pages/shop-page/shop.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={Shop} />

        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
        />
        <Route path="/checkout" exact component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
