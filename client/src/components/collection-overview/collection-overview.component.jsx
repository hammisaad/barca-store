import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsAsArray } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections, match }) => {
  console.log(match);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionOverview);
