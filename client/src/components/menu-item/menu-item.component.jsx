import React from "react";
import { useHistory } from "react-router-dom";
import "./menu-item.style.scss";

import CustomButton from "../custom-button/custom-button.component";

const MenuItem = ({ id, title, tag, imageUrl, linkUrl }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/shop/${linkUrl}`)}
      className={`menu-item ${id % 2 === 0 ? "even" : "odd"} ${
        id === 2 && "woman"
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={`content`}>
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="tag">{tag}</div>
        <CustomButton>SHOP NOW</CustomButton>
      </div>
    </div>
  );
};

export default MenuItem;
