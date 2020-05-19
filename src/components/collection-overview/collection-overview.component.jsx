import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionsSelectorAsArray } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const Shop = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelectorAsArray,
});

export default connect(mapStateToProps)(Shop);
