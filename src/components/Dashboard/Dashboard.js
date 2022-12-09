import React, { useState } from "react";
import "./Dashboard.css";
import BAR from "../../assets/button menu.png";
import ItemResult from "../ItemResult/ItemResult";
const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="wrapper">
      <header className="mobile-header">
        <button onClick={() => setShowMenu(true)}>
          <img src={BAR} alt="#" />
        </button>
        <p className="mobile-heading">Dashboard</p>
      </header>
      <div
        className="layout"
        onClick={() => {
          setShowMenu(false);
        }}
        style={{display: showMenu ? 'block' : 'none'}}
        // isShow={showMenu}
      ></div>
      <div className="info">
        <div className="info-img"></div>
        <div className="info-detail">
          <p>
            User:<span>dff</span>
          </p>
          <p>
            Point:<span>1234</span>
          </p>
          <div className="logout">
            <div className="btn-logout">LOGOUT</div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="filter">
          <div className="search">
            <input type="text" placeholder="Search" id="search" />
            <div className="btn-search">
              <div className="fas fa-search"></div>
            </div>
          </div>
          {/* filter */}
          <select name="level" id="level">
            <option value="difficult">Difficult</option>
            <option value="normal">Normal</option>
            <option value="opel">Easy</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="test-container">
          <div className="list-item-result">
            <ItemResult />
            <ItemResult />
            <ItemResult />
            <ItemResult />      
          </div>
        </div>

        <div className="pagination">
           <button>
             <i className="fas fa-chevron-left"/>
           </button>
           <button className="">1</button>
           <button className="">1</button>
           <button className="">1</button>
           <button className="">1</button>
           <button>
             <i className="fas fa-chevron-right"/>
           </button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
