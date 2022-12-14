import React, { useRef, useState } from "react";
import "./Dashboard.css";
import BAR from "../../assets/button menu.png";
import ItemResult from "../ItemResult/ItemResult";
import data from "../../data/quiz"
import { Navigate, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const history = useNavigate();
  const filterRef = useRef()
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  
  const getDate = localStorage.getItem('DataUser')
  const userParse = JSON.parse(getDate)
 
  let dataQuiz = [];

  let copyData = [...data];

  // logout
  const handleLogout = () => {
    localStorage.removeItem('DataUser');
    history(-1)
  }

  //filter 
  switch(filter) {
    case 'all' :
      dataQuiz = copyData;
      break
    case 'easy' :
      dataQuiz = copyData.filter((item) => {
        return item.type === 'easy';
      })
      break
    case 'normal' :
      dataQuiz = copyData.filter((item) => {
        return item.type === 'normal';
      })
      break
    case 'difficult':
      dataQuiz = copyData.filter((item) => {
        return item.type === 'difficult'
      })
    break
    default: dataQuiz = copyData;
  }

  
  // Search
  let dataSearch;
  const handleSearch = () => {
    dataSearch = data.filter((item) => {
       return item.title.includes(search);
  })
   dataQuiz = [...dataSearch];
  return dataQuiz;
}

 
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
      ></div>
      <div className="info">
        <div className="info-img"></div>
        <div className="info-detail">
          <p>
            User:<span>{userParse[0].email}</span>
          </p>
          <p>
            Point:<span>1000</span>
          </p>
          <div className="logout">
            <div onClick={handleLogout} className="btn-logout">LOGOUT</div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="filter">
          <div className="search">
            <input 
            type="text" 
            placeholder="Search" 
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
            <div className="btn-search" >
              <div className="fas fa-search" onClick={handleSearch}></div>
            </div>
          </div>
          {/* filter */}
          <select 
          name="level" 
          id="level"  
          ref={filterRef}
          onChange={() => setFilter(filterRef.current.value)}>
            <option value="all">All</option>
            <option value="difficult">Difficult</option>
            <option value="normal">Normal</option>
            <option value="easy">Easy</option>
          </select>
        </div>
    
        <div className="test-container">
          <div className="list-item-result">
            {dataQuiz.map((question, index) => 
              <ItemResult data={question} key={index}/>
            )}

          </div>
        </div>

        <div className="pagination">
           <button>
             <i className="fas fa-chevron-left"/>
           </button>
           <button className="">1</button>
           <button className="">2</button>
           <button className="">3</button>
           <button className="">4</button>
           <button>
             <i className="fas fa-chevron-right"/>
           </button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
