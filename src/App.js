import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

import { HomePage } from "./pages/home-page/homepage.component";
import Shop from "./pages/shop-page/shop.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });

        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/shop" exact component={Shop} />
              <Route
                exact
                path="/signup"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInUp />
                }
              />
              <Route path="/checkout" exact component={CheckoutPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
