import Dashboard from "./components/Dashboard/Dashboard";
import Exam from "./components/Exam/Exam";
import ExamFinish from "./components/ExamFinish/ExamFinish";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/exam/:id" element={<Exam />} />
      <Route path="/exam_finish" element={<ExamFinish />} />
    </Routes>
  );
}

export default App;
