import React from 'react';
import Navbar from '../Navbar.js';
import { useNavigate, useLocation } from "react-router-dom";

const StudentDirectory = () => {
    let navigate = useNavigate();

    const {state} = useLocation();
    const { username } = state;
    console.log(username)


    return (
        <>
            <Navbar />
            <h1>This is the Student Directory page</h1>
        </>
    );
}

export default StudentDirectory;
