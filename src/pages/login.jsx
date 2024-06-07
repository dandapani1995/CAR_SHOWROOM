import React from "react";
import '../css/signin.css'
const SignIn = () => {
  return (
    <div className="Login_form">
      <h1>Login page</h1>
        <label for="username">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your user name.."
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
        />
        <div className="buttons">
        <button className="center-button" type="submit" value="Submit"> login </button>
        <button className="center-button" type="submit" value="Submit"> signup </button>
        </div>
    </div>
  );
};

export default SignIn;
