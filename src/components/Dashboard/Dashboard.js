import React from 'react'
import './Dashboard.css';
import AVATAR from '../../assets/avata.png';
import STAR from '../../assets/Star 4.png';
import STAR1 from '../../assets/Star 5.png';
import CLOCK from '../../assets/clock.png';
import AWAR from '../../assets/awar.png';
import SEARCH from '../../assets/search.png';
const Dashboard = () => {
  return (
    <div className="app">
    <div className="menu">
      <div className="infoUer">
        <div className="dashboardImg">
          <img src={AVATAR} alt="" />
        </div>
        <div className="username">User: taind@gamil.com </div>
        <div className="point">Point: 2488</div>
      </div>
      <div className="logout">
        <button>logout</button>
      </div>
    </div>
    {/* Menu ben phai */}
    <div className="listItem">
      <div className="listTool">
        <div className="dashboardSearch">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button className="btnSearch">
            <img src={SEARCH} alt="#" />
          </button>
        </div>
        <select name="cars" id="cars">
          <option value="Difficult">Volvo</option>
          <option value="Easily">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="listResults">
        <div className="containerResult">
          <div className="listItemReasult">
            <h3 className="resultHeading">Kiểm tra an toàn bảo mật thông tin 2</h3>
            <div className="iconResult">
              <div className="times">
                <img src={CLOCK} alt="#" />
                <span>7 phut</span>
              </div>
              <div className="sumResult">
                <img src={AWAR}  alt="#" />
                <span>200/250</span>
              </div>
            </div>
            <div className="starts">
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR1} alt="#" />
            </div>
          </div>
          <div className="listItemReasult">
            <h3 className="resultHeading">Kiểm tra an toàn bảo mật thông tin 2</h3>
            <div className="iconResult">
              <div className="times">
              <img src={CLOCK} alt="#" />
                <span>7 phut</span>
              </div>
              <div className="sumResult">
              <img src={AWAR}  alt="#" />
                <span>200/250</span>
              </div>
            </div>
            <div className="starts">
            <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR1} alt="#" />
            </div>
          </div>
        </div>
        <div className="containerResult">
          <div className="listItemReasult">
            <h3 className="resultHeading">Kiểm tra an toàn bảo mật thông tin 2</h3>
            <div className="iconResult">
              <div className="times">
              <img src={CLOCK} alt="#" />
                <span>7 phut</span>
              </div>
              <div className="sumResult">
              <img src={AWAR}  alt="#" />
                <span>200/250</span>
              </div>
            </div>
            <div className="starts">
            <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR1} alt="#" />
            </div>
          </div>
          <div className="listItemReasult">
            <h3 className="resultHeading">Kiểm tra an toàn bảo mật thông tin 2</h3>
            <div className="iconResult">
              <div className="times">
              <img src={CLOCK} alt="#" />
                <span>7 phut</span>
              </div>
              <div className="sumResult">
              <img src={AWAR}  alt="#" />
                <span>200/250</span>
              </div>
            </div>
            <div className="starts">
            <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR} alt="#" />
              <img src={STAR1} alt="#" />
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <a href="#">«</a>
        <a href="#">1</a>
        <a className="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">»</a>
      </div>
    </div>
  </div>
  
  )
}

export default Dashboard