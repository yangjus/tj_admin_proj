import React from 'react';
import Navbar from '../Navbar.js';
import { useNavigate, useLocation } from "react-router-dom";


const Classes = () => {
    let navigate = useNavigate();

    const {state} = useLocation();
    const { username } = state;
    console.log(username)

    return (
        <>
            <Navbar />
            <h1>This is the Classes page</h1>
        </>
    );
}

export default Classes;
