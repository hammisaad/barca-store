import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomScrollbar from "../../components/custom-scrollbar/custom-scrollbar.component";

import { setActiveDiv } from "../../redux/scrollbar/scrollbar-actions";

import { shopData } from "../../redux/shop/shop.data";

import "./item.styles.scss";

const ItemPage = ({ setActiveDiv }) => {
  const match = useRouteMatch();

  const itemNotFiltered = shopData[match.params.collectionId].items.map(
    (itemm) => itemm.id == match.params.itemId && itemm
  );

  const { name, imageUrl, description, price } = itemNotFiltered.find(
    (itemFiltered) => itemFiltered && itemFiltered
  );
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
    <div className="item__page">
      <div className="item__images__container">
        <div onScroll={() => scroll()} ref={imagesRef} className="item__images">
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActiveDiv: (div) => dispatch(setActiveDiv(div)),
});

export default connect(null, mapDispatchToProps)(ItemPage);
