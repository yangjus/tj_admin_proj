import React from 'react';
import Navbar from '../Navbar.js';
import { useNavigate, useLocation } from "react-router-dom";

const TeacherDirectory = () => {
  let navigate = useNavigate();

  const {state} = useLocation();
  const { username } = state;
  console.log(username)

    return (
        <>
            <Navbar />
            <h1>This is the Teacher Directory page</h1>
        </>
    );
}

export default TeacherDirectory;
