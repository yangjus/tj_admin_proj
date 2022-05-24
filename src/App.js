import './App.css';
import Home from './home-page_components/Home.js';
import Login from './login-page_components/Login.js';
import Error from './Error.js';
import { Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

document.title = "TJ Elementary School Admin Portal";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
