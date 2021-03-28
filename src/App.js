import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component.jsx";

import Header from "./components/header/header.component";
import Women from "./pages/women/Women";
import Men from "./pages/men/Men";
import Kids from "./pages/kids/Kids";
import Gifts from "./pages/gifts/Gifts";
import Checkout from "./pages/checkout/Checkout.jsx";

import Register from "./pages/register/Register";
import Footer from "./components/footer/footer.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div className="app">
          <Header />

          <main className="main-content">
            <Switch>
              <Route path="/women" render={() => <Women />} />
              <Route path="/men" render={() => <Men />} />
              <Route path="/kids" render={() => <Kids />} />
              <Route path="/gifts" render={() => <Gifts />} />
              <Route exact path="/" render={() => <HomePage />} />

              <Route
                exact
                path="/register"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <Register />
                }
              />
              <Route exact path="/checkout" render={() => <Checkout />} />
            </Switch>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
