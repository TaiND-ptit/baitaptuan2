import React from 'react';
import BGPC from '../../assets/bgPC.png';
import BGMB from '../../assets/bgMB.png';
import CAMERA from '../../assets/camera.png';
import USERNAME from '../../assets/username.png';
import PASS from '../../assets/password.png';
import './Login.css';
const Login = () => {
  return (
    <div className="wrapper">
  <img className="appImg" width="100%" src={BGPC} alt="background" />
  <img className="appImgMobile" width="100%" src={BGMB} alt="background" /> 
  <div className="login">
    <div className="loginImg">
      <img src={CAMERA} width="100%" alt="camera" />
    </div>
    <form action className="loginForm">
      <div className="loginInput">
        <div className="iconUsername">
          <img src={USERNAME} alt="username" />
        </div>
        <input type="text" name="username" placeholder="Username" id="username" />
      </div>
      <div className="loginInput">
        <div className="iconPassword">
          <img src={PASS} alt="password" />
        </div>
        <input type="password" name="password" placeholder="Password" id="password" />
      </div>
      <div className="checkPoint">
        <input type="checkbox" />
        <div className="disriptionLogin">Remember me</div>
      </div>
      <button className="btnLogin">Login</button>
    </form>
  </div>
</div>
  )
}

export default Login