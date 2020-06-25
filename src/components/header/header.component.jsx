import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

class Header extends React.Component {
  render() {
    const { currentUser, isHidden, toggleCart } = this.props;
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {currentUser ? (
            <Link
              to="/"
              className="option"
              onClick={() =>
                auth
                  .signOut()
                  .then(() => {
                    this.props.selectCurrentUser(null);
                    this.props.history.push("/");
                  })
                  .catch((error) => {
                    // An error happened.
                  })
              }
            >
              SIGN OUT
            </Link>
          ) : (
            <Link className="option" to="/signup">
              SIGN IN
            </Link>
          )}

          <CartIcon onClick={toggleCart} />
          {isHidden ? null : <CartDropdown />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
