import {React, useState, useEffect} from 'react';
import Navbar from '../Navbar.js';
import { useLocation } from "react-router-dom";
import {Button, Dialog, DialogContent, DialogTitle, TextField, Typography, Grid} from '@mui/material';
import db from '../firebase.js'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {collection, doc, getDocs, updateDoc, setDoc} from "firebase/firestore";
import ClearIcon from '@mui/icons-material/Clear';
import Event from './Event.js'


const SchoolCalendar = () => {

    const {state} = useLocation();
    const { username } = state; /*the user */

    const[ModeladdOpen,setModeladdOpen] = useState(false)
    const[ModelDelOpen,setModelDelOpen] = useState(false)
    const[ModelEditOpen,setModelEditOpen] = useState(false)
    const [events, setEvents] = useState([]);
    const [inputTitle, setInputTitle] = useState();
    const [inputDate, setInputDate] = useState();

    const handleaddOpen=()=>{
      setModeladdOpen(true);
    }
    const handleaddClose=()=>{
      setModeladdOpen(false);
    }
    const handleDelOpen=()=>{
      setModelDelOpen(true);
    }
    const handleDelClose=()=>{
      setModelDelOpen(false);
    }
    const handleEditOpen=()=>{
      setModelEditOpen(true);
    }
    const handleEditclose=()=>{
      setModelEditOpen(false);
    }


    const showEvents = async () => {
        const documents = await getDocs(collection(db, "events"));
        console.log(documents)
        let list = [];
        documents.forEach((events) => list.push({...events.data()}));
        setEvents(list);
        console.log(list);
    }

    useEffect(() => {
        showEvents();
    }, []);

    console.log(events)

    const addEvent = async() =>{
      setDoc(doc(db, "events", inputTitle), {
        date: inputDate,
        title: inputTitle
      });
      handleaddClose();
    }

    return (
        <>
        <Navbar/>
        <h1>School Calendar</h1>
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Grid item xs={1.5}>
                <Button variant="contained" onClick={handleaddOpen}>Add Event</Button>
            </Grid>
            <Grid item xs={1.5}>
                <Button color="error" variant="contained" onClick={handleDelOpen}>Delete Event</Button>
            </Grid>
        </Grid>
        <Dialog open={ModeladdOpen}>
            <Grid item marginTop={2} marginLeft={28}>
              <ClearIcon onClick={handleaddClose}></ClearIcon>
            </Grid>
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
                <Typography variant="h6">Title</Typography>
                <TextField onChange={(e) => {setInputTitle(e.target.value)}}>Title</TextField>
                <Typography variant="h6">Date</Typography>
                <TextField onChange={(e) => {setInputDate(e.target.value)}}>date</TextField>
                <Grid item marginTop={2}>
                  <div className='addButton'><Button variant="contained" justifyContent= "center" onClick={addEvent}>Add Event</Button></div>
                </Grid>
            </DialogContent>
        </Dialog>
        <Dialog open={ModelDelOpen}>
            <Grid item marginTop={2} marginLeft={28}>
              <ClearIcon onClick={handleDelClose}></ClearIcon>
            </Grid>
            <DialogTitle>List of Events</DialogTitle>
            <DialogContent>
            {Object.entries(events).map(([key, value]) => (
              <Event data={value}/>
            ))}
            </DialogContent>
        </Dialog>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={events} />
        </>
    );
}

export default SchoolCalendar;
