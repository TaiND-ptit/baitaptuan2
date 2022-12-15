import React, { useState } from "react";
import "./ItemQuestion.css";

const ItemQuestion = ({ data }) => {
  // console.log(data)
  let answering = [...data.answer];
  const [checked, setChecked] = useState();

  return (
      <div className="do-question">
        <div className="name-question">{data.question}</div>

        <div className="list-question">
         {answering.map((item)=>(
           <div className="item-question" key={item.id}>
            <input type="radio" 
            checked={checked === item.id}
            onChange={()=>setChecked(item.id)}
              />
            <div>{item.ans}</div>
          </div>
         ))}
        </div>
      </div>

  );
};

export default ItemQuestion;
