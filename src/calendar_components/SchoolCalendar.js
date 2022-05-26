import {React, useState} from 'react';
import Navbar from '../Navbar.js';
import { useLocation } from "react-router-dom";
import {Button, Dialog, DialogContent, DialogTitle, TextField, Typography, Grid} from '@mui/material';
import db from '../firebase.js'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'


const SchoolCalendar = () => {

    const {state} = useLocation();
    const { username } = state; /*the user */

    const[ModeladdOpen,setModeladdOpen] = useState(false)
    const[ModelDelOpen,setModelDelOpen] = useState(false)
    const[ModelEditOpen,setModelEditOpen] = useState(false)

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

    
    return (
        <>
        <Navbar/>
        <h1>School Calendar</h1>
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Grid item xs={1.5}>
                <Button variant="contained" onClick={handleaddOpen}>Add Event</Button>
            </Grid>
            {/*<Grid item xs={1.5}>
                <Button color="secondary" variant="contained" onClick={handleEditOpen}>Edit Event</Button>
            </Grid>*/}
            <Grid item xs={1.5}>
                <Button color="error" variant="contained" onClick={handleDelOpen}>Delete Event</Button>
            </Grid>
        </Grid>
        <Dialog open={ModeladdOpen}>
            <b><DialogTitle>Add Event</DialogTitle></b>
            <DialogContent>
                <Typography variant="h6">Title</Typography>
                <TextField>Title</TextField>
                <Typography variant="h6">Date</Typography>
                <TextField >date</TextField>
                <div className='addButton'><Button variant="contained" justifyContent= "center" >Add Event</Button></div>
            </DialogContent>
        </Dialog>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={[ { title: 'event 1', date: '2022-05-01' } ]} />
        </>
    );
}

export default SchoolCalendar;
