import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

import google from "../../../assets/google.png";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form form-container">
        <div className="form-container--inner">
          <h3 className="form-title">I already have an account</h3>
          <p className="form-title--sub">
            Sign in with your email and password.
          </p>

          <div className="form-input-field">
            <input
              className="signin--input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="email">
              <span className="form-label-content">Email</span>
            </label>
          </div>
          <div className="form-input-field">
            <input
              className="signin--input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder=" "
              required
            />
            <label className="form-label" htmlFor="password">
              <span className="form-label-content">Password</span>
            </label>
          </div>

          <div className="form-flex">
            <input
              className="submit-btn signin-btn"
              type="submit"
              value="LOG IN"
            />
            <button
              type="button"
              className="submit-btn signin-btn google-btn"
              onClick={signInWithGoogle}
            >
              <img alt="google-icon" className="google-icon" src={google} />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
