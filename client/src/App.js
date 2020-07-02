import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";

import "./App.css";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/home-page/homepage.component"));
const Shop = lazy(() => import("./pages/shop-page/shop.component"));
const SignInUp = lazy(() => import("./pages/sign-in-up/sign-in-up.component"));

const CheckoutPage = lazy(() =>
  import("./pages/checkout-page/checkout-page.component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
            />
            <Route path="/checkout" exact component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
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
