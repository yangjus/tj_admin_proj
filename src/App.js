import './App.css';
import Home from './home-page_components/Home.js';
import Login from './login-page_components/Login.js';
import StudentDirectory from './student-directory_components/StudentDirectory.js';
import TeacherDirectory from './teacher-directory_components/TeacherDirectory.js';
import Classes from './classes_components/Classes.js';
import Calendar from './calendar_components/Calendar.js';
import Error from './Error.js';
import { Routes, Route } from 'react-router-dom';

document.title = "TJ Elementary School Admin Portal";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/student-directory" element={<StudentDirectory />}/>
        <Route path="/teacher-directory" element={<TeacherDirectory />}/>
        <Route path="/classes" element={<Classes />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
