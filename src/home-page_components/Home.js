import React from "react";
import Navbar from "../Navbar.js";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Home = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));

    const lightTheme = createTheme({ palette: { mode: 'light' } });

    return (
        <>
            <Navbar/>
            <h1>Home Page</h1>
            <Grid container spacing={2} item xs={6} key={lightTheme}>
                <ThemeProvider theme={lightTheme}>
                    <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                    >
                    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                        <Item key={elevation} elevation={elevation}>
                        {`elevation=${elevation}`}
                        </Item>
                    ))}
                    </Box>
                </ThemeProvider>
            </Grid>
        </>
    );
};

export default Home;