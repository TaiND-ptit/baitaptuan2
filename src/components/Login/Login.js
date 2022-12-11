import React, { useEffect, useRef, useState } from "react";
import CAMERA from "../../assets/camera.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";




const Login = () => {
  const Users = [
    { id: 1, username: "taind", password: "1234", isRememberMe: true },
    { id: 2, username: "tu", password: "231", isRememberMe: true },
    { id: 3, username: "admin", password: "admin", isRememberMe: true },
  ];

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const rememberMe = document.querySelector('.remember-me');

  useEffect(() => {
    setErrMsg("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    
    const userlogin = Users.filter((el, k) => {
        return el.username === username && el.password === password
    });

    if (userlogin.length === 0) {
        alert("Bạn đã nhập sai username hoặc password")
    } else {

        history("/dashboard")
    }
        
    
  };

  return (
    <div className="login-container">
      <form action className="login-form" onSubmit={handleSubmit}>
        <div className="login-img">
          <img src={CAMERA} width="100%" alt="camera" />
        </div>
        
        <div className="form-wrapper">
          <div className="form-group invalid">
            <div className="icon-username">
              <i className="icon far fa-user"></i>
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
            {/* <div className="form-message">{errMsg}</div> */}
          <div className="form-group">
            <div className="icon-password">
              <i className="icon fas fa-lock"></i>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
            {/* <div className="form-message">Vui lòng nhập đủ 6 kí tự</div> */}
          <div className="form-check">
            <input 
               type="checkbox"
               className="remember-me"
            />
            <div className="desc-login">Remember me</div>
          </div>
          {/* <Link to="/dashboard" className="btn-login">Login</Link> */}
          <button className="btn-login">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
