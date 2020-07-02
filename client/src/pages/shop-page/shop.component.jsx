import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection.overview")
);
const CollectionPageContainer = lazy(() =>
  import("../../pages/collection/collection.container")
);
const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          <Route
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
