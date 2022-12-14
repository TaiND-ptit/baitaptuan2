import React, { useState } from "react";
import "./ItemQuestion.css";

const ItemQuestion = ({ data }) => {
  // console.log(data)
  
  const [checked, setChecked] = useState();
  return (
      <div className="do-question">
        <div className="name-question">{data.question}</div>

        <div className="list-question">

          <div className="item-question">
            <input type="radio" 
             name="question" />
            <div>{data.a}</div>
          </div>

          <div className="item-question">
            <input type="radio" 
            name="question" />
            <div>{data.b}</div>
          </div>
          <div className="item-question">
            <input type="radio" 
            name="question" />
            <div>{data.c}</div>
          </div>
          <div className="item-question">
            <input type="radio" 
            name="question" />
            <div>{data.d}</div>
          </div>
        </div>
      </div>

  );
};

export default ItemQuestion;
