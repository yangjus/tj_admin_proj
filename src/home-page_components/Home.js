import React from "react";
import Navbar from "../Navbar.js";
import {Grid, Button} from '@mui/material';

const Home = (props) => {

    return (
        <>
            <Navbar/>
            <h1>Home Page</h1>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Button>Testing</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button>Testing</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;