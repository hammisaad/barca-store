import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop-data";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = { SHOP_DATA };
  }
  render() {
    return (
      <div>
        {this.state.SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
