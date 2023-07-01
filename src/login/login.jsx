import "./login.scss";
import SignIn from "./components/signIn/signIn";
import { useEffect, useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    is_logged_in: false,
    email: null,
    password: null,
  });
  return (
    <div className="root">
      {/*HK*/}
      <div className="loginContainer">
        <div style={{ flexGrow: 1 }}></div>
        <SignIn onClick={doLogin} />
        <div style={{ flexGrow: 1 }}></div>
      </div>
      <div className="carousalContainer">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" />
      </div>
    </div>
  );

  function doLogin(email, password) {
    console.log("doLogin", email, password);
  }

  useEffect(() => {
    if (loginData.is_logged_in === true) {
      //navigate to listing page
    }
  }, [loginData]);
}

export default Login;
