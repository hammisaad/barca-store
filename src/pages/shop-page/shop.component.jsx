import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

import CollectionOverviewContainer from "../../components/collection-overview/collection.overview";
import CollectionPageContainer from "../../pages/collection/collection.container";

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        <Route path={`${match.path}`} component={CollectionOverviewContainer} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
