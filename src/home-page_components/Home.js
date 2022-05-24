import React from "react";
import Navbar from "../Navbar.js";
import {Grid, Button} from '@mui/material';

const Home = (props) => {

    const btnSize = {
        maxWidth: "300px",
        maxHeight: "300px",
        minWidth: "300px",
        minHeight: "300px",
    };

    return (
        <>
            <Navbar/>
            <h1>Home Page</h1>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Button variant='contained' fontSize="30" style={btnSize}>Student Directory</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' fontSize="30" style={btnSize}>Teacher Directory</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' fontSize="30" style={btnSize}>Classes</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' fontSize="30" style={btnSize}>Calendar</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;