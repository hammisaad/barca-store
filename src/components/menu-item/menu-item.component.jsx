import React from "react";
import "./menu-item.style.scss";

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-img"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()} </div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
