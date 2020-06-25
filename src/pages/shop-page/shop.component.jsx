import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop-actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../pages/collection/collection-page.component";
import WithSpinner from "../../components/with-spinner/withSpinner.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class Shop extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionMap);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
