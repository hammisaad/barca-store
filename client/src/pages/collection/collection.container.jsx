import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionIsLoaded } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/withSpinner.component";
import CollectionPage from "./collection-page.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionIsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
