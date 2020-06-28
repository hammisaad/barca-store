import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionIsLoaded } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/withSpinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionIsLoaded(state),
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
