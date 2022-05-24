import React from "react";
import Navbar from "../Navbar.js";
import {Grid, Button} from '@mui/material';
import TJES from './images/TJES.JPG'
import { Link } from "react-router-dom";

const Home = (props) => {

    const btnSize = {
        maxWidth: "40vh",
        maxHeight: "45vh",
        minWidth: "40vh",
        minHeight: "45vh",
    };

    const photoSize = {
        height: "30vh",
        width: "100vh",
    }

    return (
        <>
            <Navbar/>
            <h1>Home Portal</h1>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Link to="/student-directory">
                        <Button variant='contained' fontSize="30" style={btnSize}>Student Directory</Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/teacher-directory">
                        <Button variant='contained' fontSize="30" style={btnSize}>Teacher Directory</Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/classes">
                        <Button variant='contained' fontSize="30" style={btnSize}>Classes</Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/calendar">
                        <Button variant='contained' fontSize="30" style={btnSize}>Calendar</Button>
                    </Link>
                </Grid>
            </Grid>
            <br></br>
            <Grid>
                <img src={TJES} style={photoSize}/>
            </Grid>
        </>
    );
};

export default Home;