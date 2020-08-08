import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";

import { selectCurrentUser } from "./redux/user/user-selector";
import { selectErrors } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import { fetchCollectionsStart } from "./redux/shop/shop-actions";

import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import ScrollToTop from "./components/scrollToTop/scrollToTop.component";

const HomePage = lazy(() => import("./pages/home/home.page"));
const ItemPageContainer = lazy(() => import("./pages/item/item.container"));

const SignInUp = lazy(() => import("./pages/sign-in-up/sign-in-up.component"));
const CollectionPageContainer = lazy(() =>
  import("./pages/collection/collection.container")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkout-page/checkout-page.component")
);

const App = ({
  checkUserSession,
  currentUser,
  fetchCollectionsStart,
  errors,
}) => {
  useEffect(() => {
    checkUserSession();
    fetchCollectionsStart();
  }, [checkUserSession, fetchCollectionsStart]);
  return (
    <div className="app">
      {errors.length > 0 &&
        errors.map((error) => cogoToast.error(<h5>{error}</h5>))}
      <ScrollToTop />
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
              component={ItemPageContainer}
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
  errors: selectErrors,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
