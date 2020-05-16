import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user-actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

class Header extends React.Component {
  render() {
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
          {this.props.currentUser ? (
            <Link
              to="/"
              className="option"
              onClick={() =>
                auth
                  .signOut()
                  .then(() => {
                    this.props.setCurrentUser(null);
                    console.log("signed out");
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
