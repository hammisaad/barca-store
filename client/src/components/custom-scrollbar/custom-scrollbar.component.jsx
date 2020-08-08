import React from "react";
import { connect } from "react-redux";

import { setActiveDiv } from "../../redux/scrollbar/scrollbar-actions";

import "./custom-scrollbar.styles.scss";

const CustomScrollbar = ({ setActiveDiv, activeDiv, parentRef, sections }) => {
  const scroll = (e, index) => {
    e.preventDefault();

    let scrollAmount = parentRef.current.scrollWidth / sections.length;
    let scrollable = e.target.parentElement.previousSibling;
    scrollable.scrollTo({
      left: scrollAmount * index,
      behavior: "smooth",
    });

    setActiveDiv(index);
  };

  return (
    <div className="custom-scrollbar">
      {sections.map((section, index) => (
        <div
          style={{
            width: `${100 / sections.length}%`,
          }}
          key={index}
          className={`scrollbar__section ${index === activeDiv && "active"}`}
          onClick={(e) => scroll(e, index)}
        ></div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeDiv: state.scrollbar.activeDiv,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveDiv: (div) => dispatch(setActiveDiv(div)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomScrollbar);
