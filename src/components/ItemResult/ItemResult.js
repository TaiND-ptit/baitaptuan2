import React from "react";

import CLOCK from "../../assets/clock.png";
import AWAR from "../../assets/awar.png";
import "./ItemResult.css";
import { Link } from "react-router-dom";

const ItemResult = () => {
  return (
    
        
           <Link to="/exam">
          <div className="item-wrapper">
            <p className="test-title">Kiểm tra an toàn bảo mật thông tin 2</p>
            <div className="test-info">
              <img src={CLOCK} alt="#" />
              <p>7 phut</p>

              <img src={AWAR} alt="#" />
              <p>124/160</p>
            </div>

            <div className="test-info-star">
              <i
                class="home-product-item__rating--gold fa fa-star"
                aria-hidden="true"
              ></i>
              <i
                class="home-product-item__rating--gold fa fa-star"
                aria-hidden="true"
              ></i>
              <i
                class="home-product-item__rating--gold fa fa-star"
                aria-hidden="true"
              ></i>
              <i
                class="home-product-item__rating--gold fa fa-star"
                aria-hidden="true"
              ></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>       
          </Link>
     
      
  );
};

export default ItemResult;
