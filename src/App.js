import './App.css';
import Home from './home-page_components/Home.js';
import Login from './login-page_components/Login.js';
import Error from './Error.js';
import { Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

document.title = "TJ Elementary School Admin Portal";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login db={db}/>}/>
        <Route path="/home" element={<Home db={db}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
