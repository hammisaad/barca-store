import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { addItem } from "../../redux/cart/cart-actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, collection }) => {
  const history = useHistory();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: item.id * 0.07 }}
        exit={{ y: -300, opacity: 0 }}
        className="collection__item"
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
