import React, { Component } from "react";

import "../../signin-signup/signin-signup.styles.scss";

import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";
class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, repeatPassword } = this.state;
    if (password !== repeatPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
    } catch (error) {
      alert(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form form-container">
        <div className="form-container--inner">
          <h3 className="form-title">I don't have an account</h3>
          <p className="form-title--sub">
            Sign up with your email and password
          </p>
          <div className="form-input-field">
            <input
              onChange={this.handleChange}
              className="signin--input"
              type="text"
              name="displayName"
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="displayName">
              <span className="form-label-content">Full Name</span>
            </label>
          </div>

          <div className="form-input-field">
            <input
              onChange={this.handleChange}
              className="signin--input"
              type="email"
              name="email"
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="email">
              <span className="form-label-content">Email</span>
            </label>
          </div>
          <div className="form-input-field">
            <input
              onChange={this.handleChange}
              className="signin--input"
              type="password"
              name="password"
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="password">
              <span className="form-label-content">Password</span>
            </label>
          </div>
          <div className="form-input-field">
            <input
              onChange={this.handleChange}
              className="signin--input"
              type="password"
              name="repeatPassword"
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="repeatPassword">
              <span className="form-label-content">Repeat Password</span>
            </label>
          </div>
          <div className="form-flex">
            <input
              className="submit-btn signup-btn"
              type="submit"
              value="REGISTER"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
