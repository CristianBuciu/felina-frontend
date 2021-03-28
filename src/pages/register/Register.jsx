import React from "react";
import SignIn from "../signin-signup/signin/signin.component";
import SignUp from "../signin-signup/signup/signup.component";
import "./Register.scss";

const Register = () => {
  return (
    <div className="registration">
      <div>
        <h1 className="registration__title">LOG IN / REGISTER</h1>
      </div>
      <div className="registration__flex">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
