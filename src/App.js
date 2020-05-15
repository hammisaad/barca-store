import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { HomePage } from "./pages/home-page/homepage.component";
import Shop from "./pages/shop-page/shop.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import Header from "./components/header/header.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });

        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header currentUser />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/signup" exact component={SignInUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
