import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionIsLoaded } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/withSpinner.component";
import ItemPage from "./item.page";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionIsLoaded(state),
});

const ItemPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ItemPage);

export default ItemPageContainer;
