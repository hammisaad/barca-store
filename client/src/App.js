import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import { fetchCollectionsStart } from "./redux/shop/shop-actions";

import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/home/home.page"));
const ItemPage = lazy(() => import("./pages/item/item.page"));

const SignInUp = lazy(() => import("./pages/sign-in-up/sign-in-up.component"));
const CollectionPageContainer = lazy(() =>
  import("./pages/collection/collection.container")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkout-page/checkout-page.component")
);

const App = ({ checkUserSession, currentUser, fetchCollectionsStart }) => {
  useEffect(() => {
    checkUserSession();
    fetchCollectionsStart();
  }, [checkUserSession, fetchCollectionsStart]);
  return (
    <div className="app">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/shop/:collectionId/:itemId"
              component={ItemPage}
            />
            <Route
              exact
              path={`/shop/:collectionId`}
              component={CollectionPageContainer}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
