import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomScrollbar from "../../components/custom-scrollbar/custom-scrollbar.component";

import { setActiveDiv } from "../../redux/scrollbar/scrollbar-actions";
import { selectCollectionItem } from "../../redux/shop/shop-selectors";

import "./item.styles.scss";

const ItemPage = ({ setActiveDiv, item }) => {
  const { name, imageUrl, description } = item;
  const [customItem, setCustomItem] = useState({
    size: 0,
    player: "",
  });
  const { size, player } = customItem;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function scroll() {
    let scrollAmount = imagesRef.current.scrollWidth / imageUrl.length;
    let activeDiv = Math.floor(imagesRef.current.scrollLeft / scrollAmount);

    setActiveDiv(activeDiv);
  }

  const imagesRef = useRef(null);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="item__page"
      >
        <div className="item__images__container">
          <div
            onScroll={() => scroll()}
            ref={imagesRef}
            className="item__images"
          >
            {imageUrl.map((url, index) => (
              <img key={index} src={url} className="item__image" alt="" />
            ))}
          </div>
          <CustomScrollbar parentRef={imagesRef} sections={imageUrl} />
        </div>

        <div className="item__details">
          <h3 className="item__title">{name}</h3>
          <form
            action=""
            className="item__customization"
            onSubmit={() => handleSubmit()}
          >
            <FormInput
              name="size"
              type="number"
              handleChange={() => setCustomItem({ name: size })}
              value={size}
              label="size"
              required
            />
            <FormInput
              name="player"
              type="text"
              handleChange={() => setCustomItem({ name: player })}
              value={player}
              label="player"
              required
            />
            <CustomButton>Add to cart</CustomButton>
          </form>
          <div className="item__description">
            <strong> Description</strong>
            <p className="barca__exclusive__product">
              BARÇA STORE'S EXCLUSIVE PRODUCT
            </p>
            <p className="description__text"> {description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActiveDiv: (div) => dispatch(setActiveDiv(div)),
});

const mapStateToProps = (state, ownProps) => ({
  item: selectCollectionItem(ownProps.match.params.itemId)(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
