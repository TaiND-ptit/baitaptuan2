import React from "react";
import CAMERA from "../../assets/camera.png";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      {/* <div className="login"> */}
     
        <form action className="login-form">
          <div className="login-img">
            <img src={CAMERA} width="100%" alt="camera" />
          </div>

          <div class="form-wrapper">
          <div className="form-group">
            <div className="icon-username">
               <i className="icon far fa-user"></i>
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="form-group">
            <div className="icon-password">
            <i className="icon fas fa-lock"></i>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" />
            <div className="desc-login">Remember me</div>
          </div>
          <Link to="/dashboard" className="btn-login">Login</Link>
        </div>
        </form>
      </div>
    // </div>
  );
};

export default Login;
