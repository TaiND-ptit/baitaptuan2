import React from "react";
import { Link } from "react-router-dom";
import "./ExamFinish.css";
const ExamFinish = () => {
  return (
    <div className="exam-finish-wrapper">
      <div className="modal-container">
        <div className="result-heading">
          Kiểm tra an toàn bảo mật thông tin lần 2
        </div>
        <div className="info-result">
          <div className="list-result">
            <div className="item-result">
              <div>Số câu trả lời đúng:</div>
              <div>12</div>
            </div>
            <div className="item-result">
              <div>Số câu trả lời sai:</div>
              <div>3</div>
            </div>
            <div className="item-result">
              <div>Số câu chưa trả lời đúng:</div>
              <div>1</div>
            </div>
            <div className="item-result">
              <div>Tổng số câu hỏi:</div>
              <div>16</div>
            </div>
          </div>
          <div className="score">
            <span>Điểm số: 120/160</span>
          </div>
        </div>
        <div className="btn-result">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default ExamFinish;
