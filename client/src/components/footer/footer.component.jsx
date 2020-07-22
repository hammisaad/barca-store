import React from "react";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__div">
        <p className="footer__div__title">Help</p>
        <p className="footer__div__item">Club</p>
        <p className="footer__div__item">order</p>
        <img
          className="footer__div__img"
          src={require("../../assets/barca.svg")}
          alt=""
        />
      </div>
      <div className="footer__div">
        <p className="footer__div__title">Barça Camp Nou Store</p>
        <p className="footer__div__item">Store Finder</p>
      </div>
      <div className="footer__div">
        <p className="footer__div__item">Follow Barça</p>
        <ul className="footer__div__social">
          <li className="social__icon">
            <i className="icofont-instagram"></i>
          </li>
          <li className="social__icon">
            <i className="icofont-facebook"></i>
          </li>
          <li className="social__icon">
            <i className="icofont-twitter"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
