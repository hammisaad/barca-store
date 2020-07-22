import React from "react";
import { createStructuredSelector } from "reselect";
import { directorySectionsSelector } from "../../redux/directory/directory-selectors";
import { connect } from "react-redux";

import "./directory.style.scss";

import MenuItem from "../menu-item/menu-item.component";
import Discount from "../discount/discount.component";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      <Discount />
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} id={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
});
export default connect(mapStateToProps)(Directory);
