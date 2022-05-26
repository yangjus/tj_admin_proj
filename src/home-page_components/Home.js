import { React, useEffect } from "react";
import Navbar from "../Navbar.js";
import {Grid, Button} from '@mui/material';
import TJES from './images/TJES.JPG'
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate()

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

    const {state} = useLocation();
    const { username } = state || {};
    console.log("Entering home page: ", username)

    function studentOnClick(){
      navigate("/student-directory", { state: {username: username}})
    }

    function teacherOnClick(){
      navigate("/teacher-directory", { state: {username: username}})
    }

    function calendarOnClick(){
      navigate("/calendar", { state: {username: username}})
    }

    function classesOnClick(){
      navigate("/classes", { state: {username: username}})
    }


      return (
          <>
              <Navbar/>
              <h1>Home Portal</h1>
              <Grid container spacing={1}>
                  <Grid item xs={3}>
                          <Button onClick={studentOnClick} variant='contained' fontSize="30" style={btnSize}>Student Directory</Button>
                  </Grid>
                  <Grid item xs={3}>
                          <Button onClick={teacherOnClick} variant='contained' fontSize="30" style={btnSize}>Teacher Directory</Button>
                  </Grid>
                  <Grid item xs={3}>
                          <Button onClick={classesOnClick} variant='contained' fontSize="30" style={btnSize}>Classes</Button>
                  </Grid>
                  <Grid item xs={3}>
                          <Button onClick={calendarOnClick} variant='contained' fontSize="30" style={btnSize}>Calendar</Button>
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
