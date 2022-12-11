import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemQuestion from "../ItemQuestion/ItemQuestion";
import "./Exam.css";

const quizData = [
  {
    id: 1,
    question: "Câu 1: Which language runs in a web browser?",
    a: "A. Java",
    b: "B. C",
    c: "C. Python",
    d: "D. JavaScript",
    correct: "d",
  },
  {
    id: 2,
    question: "Câu 2: What does CSS stand for?",
    a: "A. Central Style Sheets",
    b: "B. Cascading Style Sheets",
    c: "C. Cascading Simple Sheets",
    d: "D. Cars SUVs Sailboats",
    correct: "b",
  },
  {
    id: 3,
    question: "Câu 3: What does HTML stand for?",
    a: "A. Hypertext Markup Language",
    b: "B. Hypertext Markdown Language",
    c: "C. Hyperloop Machine Language",
    d: "D. Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    id: 4,
    question: "Cấu 4. What year was JavaScript launched?",
    a: "A. 1996",
    b: "B. 1995",
    c: "C. 1994",
    d: "B. none of the above",
    correct: "b",
  },
];

const Exam = () => {
  let lenghtQuiz = quizData.length;
  const [currentQuiz , setCurrentQuiz] = useState(0);
  const [showListQuestion, setShowListQuestion] = useState(false)
  let score = 0;

  const currentQuizData = quizData[currentQuiz ];

  const prevQuiz = () =>{
    if(currentQuiz > 0){
      setCurrentQuiz(currentQuiz - 1);
    }
  } 

  const chooseQuestion = () =>{
     console.log()
  }

  const nextQuiz = () =>{
    if(currentQuiz < lenghtQuiz - 1 ){
      setCurrentQuiz(currentQuiz + 1);
    }
  }

  return (
    <div className="wrapper">
      <div className="question-wrapper">
        <div className="nav-question">
          <p className="question-title">Kiem tra</p>
          <p className="count-down">
            Con lai:
            <span> 14 phut</span>
            <span> 22 giay</span>
          </p>
          <span className="time-container">
            <span className="time-line"></span>
          </span>
        </div>

        <div className="question-container">
          <div className="do-question">
            <div className="name-question">{currentQuizData.question}</div>

            <div className="list-question">
              <ItemQuestion data={currentQuizData.a}/>
              <ItemQuestion data={currentQuizData.b}/>
              <ItemQuestion data={currentQuizData.c}/>
              <ItemQuestion data={currentQuizData.d}/>
            </div>
          </div>
    {/* button transion */}
        <div className="btn-question">
           <div className="btn-pc">
              <button onClick={prevQuiz}>Câu trước</button>
              <button onClick={nextQuiz}>Câu sau</button>
           </div>
           <button className="btn-mb"
            onClick={()=>setShowListQuestion(true)}
           >Chuyến đến</button>
        </div>
         
        </div>
      </div>
      <div className="Layout" 
      style={{display: showListQuestion ? 'block' : 'none'}} 
      onClick={()=>setShowListQuestion(false)}>
      </div>
      
      <div className="number-question"
      style={{display: showListQuestion ? 'none' : 'flex'}} 
      >
             <div className="btn-wrapper">
             {quizData.map((numQues, index)=>{
             return ( <button onClick={chooseQuestion()} className={numQues.id === currentQuiz + 1 ? 'answering': 'active'}>{index+1}</button>)
          })}
    
              </div>
              <button className="btn-submit">Nộp bài</button>
        </div>
    </div>

  );
};

export default Exam;
