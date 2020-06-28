import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user-selector";
import { selectCollectionsAsArray } from "./redux/shop/shop-selectors";
import { checkUserSession } from "./redux/user/user-actions";

import { HomePage } from "./pages/home-page/homepage.component";
import Shop from "./pages/shop-page/shop.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsAsArray,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
