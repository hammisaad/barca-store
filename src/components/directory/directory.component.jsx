import React from "react";
import { createStructuredSelector } from "reselect";
import { directorySectionsSelector } from "../../redux/directory/directory-selectors";
import { connect } from "react-redux";

import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
});
export default connect(mapStateToProps)(Directory);
