import React from "react";
import { useState } from "react"
import { Box, AppBar, Toolbar, Typography, Checkbox, Grid, TextField, FormControlLabel, Paper, Button } from '@mui/material';
import { Link } from "react-router-dom";
import './Login.css';

const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function getCredentials(){
      console.log(username)
      console.log(password)
    }

    return (
        <div className="Login">
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                      <Typography variant="h6" component="div">
                          TJ Admin Portal
                      </Typography>
                  </Toolbar>
              </AppBar>
          </Box>

          <div className="LoginLabel">
            <Typography variant="h4" component="div">
                Login
            </Typography>
          </div>

          <div className="Username">
            <TextField label="Username" onChange={(e) => {setUsername(e.target.value)}}></TextField>
          </div>
          <div className="Password">
            <TextField label="Password" onChange={(e) => {setPassword(e.target.value)}} type={'password'}></TextField>
          </div>
          <div className="LoginButton">
            <Button variant="contained" onClick={getCredentials}> Login </Button>
          </div>
        </div>
    );
};

export default Login;
