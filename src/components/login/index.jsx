import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import { login, hideLoginPage } from "../../features/userSlice";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const user = [];
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const showLoginPage = useSelector((state) => state.users.showLoginPage);

  const handleClick = (e) => {
    e.preventDefault();
    user.uname = uname;
    user.pwd = pwd;
    setUname("");
    setPwd("");
    dispatch(login(user));
  };
  return (
    <div
      className={
        showLoginPage
          ? "login_page login_page_show"
          : "login_page login_page_hide"
      }
    >
      <div className="login_page_container">
        <div className="close_login_page">
          <button
            onClick={() => dispatch(hideLoginPage())}
            className="close_login_page_btn"
          >
            <GrClose />
          </button>
        </div>
        <div className="login_row">
          <h5 className="active">Login</h5>
          <h5 className="register">Register</h5>
        </div>
        <div className="login_from">
          <form className="form" method="post">
            <label htmlFor="mail">Email *</label>
            <input
              onChange={(e) => {
                setUname(e.target.value);
              }}
              value={uname}
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
            />
            <label htmlFor="password">Password *</label>
            <input
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              value={pwd}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="remember_me forgot_pass">
              <div>
                <input type="checkbox" name="rememberme" id="rememberme" />
                <label htmlFor="rememberme">Remember Me</label>
              </div>
              <a href="#" className="forgot_pwd">
                Forgot your password?
              </a>
            </div>
            <div className="login_signup_btns">
              <button onClick={handleClick} type="submit" className="login_btn">
                login
              </button>
              <p>or</p>
              <button className="register_btn">Create New Account</button>
            </div>
          </form>
        </div>
        <div className="login_page_footer">
          <p>By providing your email address, you agree to our </p>
          <div className="privacy terms_of_use">
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
