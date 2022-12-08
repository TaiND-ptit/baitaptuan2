import React from 'react'
import './Exam.css'
const Exam = () => {
  return (
    <div className="app">
  <div className="examleft">
    <div className="times">
      <h3 className="nameExam">Kiểm tra an toàn bảo mật thông tin 2</h3>
      <div className="time_remaining">Còn lại: 14 phút 22 giây</div>
      <div className="time">
        <input id="progress" className="progress" type="range" defaultValue={0} step={1} min={0} max={100} />
      </div>
    </div>
    <div className="questionnaire">
      <h3 className="subcriptionquestion">Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?</h3>
      <div className="choosequestion">
        <div className="itemquestion">
          <input type="checkbox" name id />
          <div>A. 12 ngày nếu làm đủ cả năm</div>
        </div>
        <div className="itemquestion">
          <input type="checkbox" name id />
          <div>A. 12 ngày nếu làm đủ cả năm</div>
        </div>
        <div className="itemquestion">
          <input type="checkbox" name id />
          <div>A. 12 ngày nếu làm đủ cả năm</div>
        </div>
        <div className="itemquestion">
          <input type="checkbox" name id />
          <div>A. 12 ngày nếu làm đủ cả năm</div>
        </div>                               
      </div>
      <div className="btntransion">
        <button className="btnprev">Câu trước</button>
        <button className="btnnext">Câu sau</button>
      </div> 
    </div>
  </div>
  <div className="examright">
    <div className="btn_questions">
      <button className="active">1</button>
      <button className="active">2</button>
      <button className="answering">3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>10</button>
      <button>11</button>
      <button>12</button>
      <button>13</button>
      <button>14</button>
      <button>15</button>
      <button>16</button>
    </div>
    <div className="btn_submit">
      <button>Submit</button>
    </div>
  </div>
</div>

  )
}

export default Exam
