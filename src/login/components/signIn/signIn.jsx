import "./signIn.scss";
import { useEffect } from "react";

export default function SignIn(props) {
  let email = "";
  let password = "";
  return (
    <div>
      <div className="welcomeText">Welcome back</div>
      <br />
      <br />
      <br />

      <label className="labelText">Email</label>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(val) => {
          email = val.target.value;
        }}
      />

      <br />
      <br />

      <label className="labelText">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(val) => {
          password = val.target.value;
        }}
      />

      <br />
      <br />

      <button
        className="signInButton"
        onClick={() => {
          console.log("email, password", email, password);
          props.onClick(email, password);
        }}
      >
        Sign in
      </button>
    </div>
  );

  useEffect(() => {
    email = "";
    password = "";
  });
}
