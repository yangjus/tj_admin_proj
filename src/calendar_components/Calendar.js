import React from 'react';
import Navbar from '../Navbar.js';
import { useLocation } from "react-router-dom";


const Calendar = () => {
    const {state} = useLocation();
    const { username } = state;
    
    return (
        <>
            <Navbar />
            <h1>This is the Calendar page</h1>
        </>
    );
}

export default Calendar;
