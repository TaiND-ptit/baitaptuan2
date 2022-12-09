import React from "react";
import "./ItemQuestion.css";

const ItemQuestion = ({ data }) => {
    console.log(data);
  return (
    <div className="item-question">
      <input type="radio" name="question" />
      <div>{data}</div>
    </div>
  );
};

export default ItemQuestion;
