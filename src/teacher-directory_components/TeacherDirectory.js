import React from 'react';
import Navbar from '../Navbar.js';
import { useLocation } from "react-router-dom";

const TeacherDirectory = () => {
  const {state} = useLocation();
  const { username } = state;

    return (
        <>
            <Navbar />
            <h1>This is the Teacher Directory page</h1>
        </>
    );
}

export default TeacherDirectory;
