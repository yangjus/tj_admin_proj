import React from "react";
import { useState } from "react"
import { Checkbox, Grid, TextField, FormControlLabel, Paper, Button } from '@mui/material';

const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function getCredentials(){
      console.log(username)
      console.log(password)
    }

    return (
        <div className="Login">
          <h1>Login Page</h1>
          <div className="Username">
            <TextField label="Username" onChange={(e) => {setUsername(e.target.value)}}></TextField>
          </div>
          <div className="Password">
            <TextField label="Password" onChange={(e) => {setPassword(e.target.value)}} type={'password'}></TextField>
          </div>
          <div className="Button">
            <Button variant="contained" onClick={getCredentials}> Login </Button>
          </div>
        </div>
    );
};

export default Login;
