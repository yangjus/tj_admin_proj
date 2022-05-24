import React from "react";
import Navbar from "../Navbar.js";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TJES from './images/TJES.JPG'
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