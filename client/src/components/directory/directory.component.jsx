import React from "react";
import { createStructuredSelector } from "reselect";
import { directorySectionsSelector } from "../../redux/directory/directory-selectors";
import { connect } from "react-redux";

import "./directory.style.scss";
import { DirectoryMenu } from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
});
export default connect(mapStateToProps)(Directory);
