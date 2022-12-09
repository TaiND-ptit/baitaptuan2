import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemQuestion from "../ItemQuestion/ItemQuestion";
import "./Exam.css";

const quizData = [
  { id: 1,
    question: "Câu 1: Which language runs in a web browser?",
    a: "A. Java",
    b: "B. C",
    c: "C. Python",
    d: "D. JavaScript",
    correct: "d",
  },
  { id: 2,
    question: "Câu 2: What does CSS stand for?",
    a: "A. Central Style Sheets",
    b: "B. Cascading Style Sheets",
    c: "C. Cascading Simple Sheets",
    d: "D. Cars SUVs Sailboats",
    correct: "b",
  },
  { id: 3,
    question: "Câu 3: What does HTML stand for?",
    a: "A. Hypertext Markup Language",
    b: "B. Hypertext Markdown Language",
    c: "C. Hyperloop Machine Language",
    d: "D. Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  { id: 4,
    question: "Cấu 4. What year was JavaScript launched?",
    a: "A. 1996",
    b: "B. 1995",
    c: "C. 1994",
    d: "B. none of the above",
    correct: "b",
  },
];



const Exam = () => {
  const active = useState(1);
  
  return (
    <div className="app">
      <div className="examleft">
        <div className="times">
          <h3 className="nameExam">Kiểm tra an toàn bảo mật thông tin 2</h3>
          <div className="time_remaining">Còn lại: 14 phút 22 giây</div>
          <div className="time">
            <input
              id="progress"
              className="progress"
              type="range"
              defaultValue={0}
              step={1}
              min={0}
              max={100}
            />
          </div>
        </div>
        <div className="questionnaire">
          {quizData.map((question, index) => (
            <div key={index}>
              <h3 className="desc-question">{question.question}</h3>
              <div className="choose-question">
                <ItemQuestion data={question.a} />
                <ItemQuestion data={question.b} />
                <ItemQuestion data={question.c} />
                <ItemQuestion data={question.d} />
              </div>
            </div>
          ))}

          <div className="btntransion">
            <button className="btnprev">Câu trước</button>
            <button className="btnnext">Câu sau</button>
          </div>
        </div>
      </div>
      <div className="examright">
        <div className="btn_questions">
          {quizData.map((numQues, index)=>{
            return ( <button className={numQues.id === index ? 'answering': 'active'}>{index+1}</button>)
          })}
          {/* <button className="active">1</button>
          <button className="active">2</button>
          <button className="answering">3</button> */}

        </div>
        <div className="btn_submit">
          <Link to="/exam_finish">Submit</Link>
        </div>
      </div>
    </div>
  );
};

export default Exam;
