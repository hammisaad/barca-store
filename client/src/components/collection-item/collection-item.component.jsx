import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItem } from "../../redux/cart/cart-actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, collection }) => {
  const history = useHistory();
  return (
    <div className="collection__item">
      <div
        onClick={() => history.push(`/shop/${collection}/${item.id}`)}
        className="collection__item__image"
        style={{
          backgroundImage: `url(${item.imageUrl[0]})`,
        }}
      />
      <div className="collection__item__footer">
        <span
          onClick={() => history.push(`/shop/${collection}/${item.id}`)}
          className="name"
        >
          {item.name}
        </span>
        <span className="price">
          <p> €{item.price}</p>
          <i onClick={() => addItem(item)} className="icofont-cart"></i>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
