import React, { useState } from "react";

import CLOCK from "../../assets/clock.png";
import AWAR from "../../assets/awar.png";
import "./ItemResult.css";
import { Link } from "react-router-dom";

const ItemResult = ({data}) => {
  // let maxPoint = data.questions.length *10;
  let [point, setPoint] = useState(0);
  let clock =  Math.floor(data.time/60)
  const rating = new Array(5).fill(2);

  return ( 
        <Link to={`/exam/${data.id}`}>
          <div className="item-wrapper">
            <p className="test-title">{data.title}</p>
            <div className="test-info">
              <img src={CLOCK} alt="#" />
              <p>{clock} phut</p>

              <img src={AWAR} alt="#" />
              <p>{point}/{data.Point}</p>
            </div>

            <div className="test-info-star">
            {rating.map((item, index) => (
              <i
                key={index}
                style={{color: index + 1 <= data.ratings ? '#909090' : 'white'}}
                className="exam-item__rating--gold fa fa-star"
                aria-hidden="true"
              ></i>
            ))}      
            </div>
          </div>       
      </Link>
     
      
  );
};

export default ItemResult;
