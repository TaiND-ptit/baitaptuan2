import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemQuestion from "../ItemQuestion/ItemQuestion";
import data from "../../data/quiz";
import "./Exam.css";
import useCountdown from "../../hooks/useCountdown";

const Exam = () => {
  const { id } = useParams();
  let questionID = parseInt(id, 10);
  let quizData = [];
  let titleQuiz = "";
  let time = 0;
  data.map((d, i) => {
    if (d.id === questionID) {
      titleQuiz = d.title;
      time = d.time;
      quizData = [...d.questions];
    }
  });

  //  const percentTimeRemaining =

  const history = useNavigate();

  let score = 0;
  let lenghtQuiz = quizData.length;
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [showListQuestion, setShowListQuestion] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const timeNowInMs = useMemo(() => new Date().getTime(), []);

  const timeTargetInMs = timeNowInMs + time * 1000;

  const { hours, minutes, seconds } = useCountdown(timeTargetInMs);
  const timeRemaining = hours * 1000 * 60 * 60 + minutes * 1000 * 60 + seconds * 1000;
  const percentTimeRemaining = 100 - Math.floor(timeRemaining / (time * 1000) * 100);
  
  useEffect(() => {
    if (hours + minutes + seconds <= 0) {
      setIsFinish(false);
    }
    return ()=> clearInterval(hours, minutes, seconds);
  }, [hours, minutes, seconds]);

  const currentQuizData = quizData[currentQuiz];

  const prevQuiz = () => {
    if (currentQuiz > 0) {
      setCurrentQuiz(currentQuiz - 1);
    }
  };

  const chooseQuestion = (index) => {
    setCurrentQuiz(index);
  };

  const nextQuiz = () => {
    if (currentQuiz < lenghtQuiz - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };

  const onSubmit = () => {
    history("/dashboard");
  };

  return (
    <div className="wrapper">
      <div className="question-wrapper">
        <div className="nav-question">
          <p className="question-title">{titleQuiz}</p>
          {hours + minutes + seconds <= 0 ? (
            <p className="count-down">Hết giờ</p>
          ) : (
            <p className="count-down">
              Con lai:
              {hours > 0 && <span> {hours} Giờ </span>}
              <span> {minutes} phut - </span>
              <span>{seconds} giay</span>
            </p>
          )}

          <span className="time-container">
            <span 
            className="time-line"
            style={{ minWidth: percentTimeRemaining === 100 ? `${100}%` : `${percentTimeRemaining}%` }}
            ></span>
          </span>
        </div>

        <div className="question-container">
           <ItemQuestion data={currentQuizData}/>
          {/* button transion */}
          <div className="btn-question">
            <div className="btn-pc">
              <button onClick={prevQuiz}>Câu trước</button>
              <button onClick={nextQuiz}>Câu sau</button>
            </div>
            <button
              className="btn-mb"
              onClick={() => setShowListQuestion(true)}
            >
              Chuyến đến
            </button>
          </div>
        </div>
      </div>
      <div
        className="Layout"
        style={{ display: showListQuestion ? "block" : "none" }}
        onClick={() => setShowListQuestion(false)}
      ></div>

      <div
        className="number-question"
        style={{ display: showListQuestion ? "none" : "flex" }}
      >
        <div className="btn-wrapper">
          {quizData.map((numQues, index) => {
            return (
              <button
                onClick={() => chooseQuestion(index)}
                className={numQues.id === currentQuiz + 1 ? "answering" : ""}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <button className="btn-submit" onClick={onSubmit}>
          Nộp bài
        </button>
      </div>
    </div>
  );
};

export default Exam;
