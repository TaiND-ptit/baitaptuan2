import React, { useEffect, useRef, useState } from "react";
import CAMERA from "../../assets/camera.png";
import "./Login.css";
import { useNavigate, Navigate } from "react-router-dom";
import isEmpty from 'validator/lib/isEmpty'
import Users from '../../data/Users';

const Login = () => {

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ischecked, setIsChecked] = useState(false);
  const [errMsg, setErrMsg] = useState({});

  const handleRememberMe = (e) => {
     setIsChecked(e.target.checked);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    const isValid = validateAll()
    if(!isValid) return

    const userlogin = Users.filter((el, k) => {
        return el.username === username && el.password === password

    });

    if (userlogin.length === 0) {
        alert("Bạn đã nhập sai username hoặc password")
    }else if(userlogin.length > 0 && ischecked){
          localStorage.setItem('DataUser',JSON.stringify(userlogin))
          history("/dashboard")
    }
    else {

        history("/dashboard")
    } 

  if(username === localStorage.getItem('DataUser').username && password === localStorage.getItem('DataUser').password){
    
    return <Navigate to={'/dashboard'}/>  
  }

  };

  const validateAll = () => {
      const msg ={}
      if(isEmpty(username)){
           msg.username = 'Vui lòng nhập username';
      }

      if(isEmpty(password)){
        msg.password = 'Vui lòng nhập password';
      }
      
      setErrMsg(msg)
      if(Object.keys(msg).length > 0) return false;
      return true;
  }

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
              // required
            />
          </div>
            <div className="form-message">{errMsg.username}</div>
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
              // required
            />
          </div>
            <div className="form-message">{errMsg.password}</div>
          <div className="form-check">
            <input 
               type="checkbox"
               onChange= {handleRememberMe}
               className="remember-me"
            />
            <div className="desc-login">Remember me</div>
          </div>

          <button className="btn-login">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
