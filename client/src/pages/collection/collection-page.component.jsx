import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { shopData } from "../../redux/shop/shop.data";

const CollectionPage = ({ collection, match }) => {
  const { title, items } = shopData[match.params.collectionId];

  return (
    <div className="collection-page">
      <h2 className="collection-page__title">{title}</h2>
      <div className="collection-page__items">
        {items.map((item) => (
          <CollectionItem
            className="collection-page__item"
            key={item.id}
            item={item}
            collection={title}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
