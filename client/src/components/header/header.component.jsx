import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { signOutStart } from "../../redux/user/user-actions";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/barca.svg";
import "./header.styles.scss";

const Header = ({ currentUser, isHidden, toggleCart, signOutStart }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="header__options">
        <div className="header__options__up">
          <ul>
            <li>
              {currentUser ? (
                <Link to="/" className="option" onClick={signOutStart}>
                  sign out <i className="icofont-user-alt-3"></i>
                </Link>
              ) : (
                <Link className="option" to="/signup">
                  Log in / register<i className="icofont-user-alt-3"></i>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className={`header__options__low  ${navOpen && "open"} `}>
          <div onClick={() => setNavOpen(false)} className="burger-close">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
          <ul>
            {navLinks.map(({ link, name }, index) => (
              <li key={index}>
                <Link
                  onClick={() => setNavOpen(false)}
                  to={link}
                  className="option"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setNavOpen(true)} className="burger">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
          <CartIcon onClick={toggleCart} />
          {isHidden ? null : <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

const navLinks = [
  { link: "/shop/kits", name: "kits" },
  { link: "/shop/exclusives", name: "exclusives" },
  { link: "/shop/kits", name: "masks" },
  { link: "/shop/exclusives", name: "accessories" },
  { link: "/shop/kits", name: "fashion" },
];

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
