import React from "react";
import "./ExamFinish.css";
const ExamFinish = () => {
  return (
    <div className="exam-finish-wrapper">
      <div className="modal-container">
        <div className="result-heading">
          Kiểm tra an toàn bảo mật thông tin lần 2
        </div>
        <div className="infoResult">
          <div className="listQuestion">
            <div className="answer">
              <div>Số câu trả lời đúng:</div>
              <div>12</div>
            </div>
            <div className="answer">
              <div>Số câu trả lời sai:</div>
              <div>3</div>
            </div>
            <div className="answer">
              <div>Số câu chưa trả lời đúng:</div>
              <div>1</div>
            </div>
            <div className="answer">
              <div>Tổng số câu hỏi:</div>
              <div>16</div>
            </div>
          </div>
          <div className="scores">
            <span>Điểm số: 120/160</span>
          </div>
        </div>
        <div className="btnDashboard">
          <button>Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default ExamFinish;
