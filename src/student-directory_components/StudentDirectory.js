import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import {List, ListItem, ListItemText, IconButton, Grid, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const StudentDirectory = () => {

    const [students, setStudents] = useState([])
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    const students = []
    getDocs(collection(db, "students"))
    .then((allStudents) => allStudents.forEach((student) => students.push({id: student.id, ...student.data()}))
    )
    setStudents(students)
    }, [db])

    const editFirstName = (studentID, newFirstName) => {
        updateDoc(doc(db, "students", studentID)), {
            firstname: newFirstName
        }
    }
    
    const editLastName = (studentID, newLastName) => {
        updateDoc(doc(db, "students", studentID)), {
            lastname: newLastName
        }
    }
    
    const editBirth = (studentID, newBirthday) => {
        updateDoc(doc(db, "students", studentID)), {
            birthday: newBirthday
        }
    }
    
    const editGrade = (studentID, newGrade) => {
        updateDoc(doc(db, "students", studentID)), {
            grade: newGrade
        }
    }

    const modalClick = () => {
        setIsClicked(!isClicked)
    }

    const commonStyles = {
        bgcolor: '#ADD8E6',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '80vh',
    };

    return (
        <>
            <Navbar />
            <h1>Student Directory</h1>
            <IconButton>
              <AddReactionIcon />
            </IconButton>
            <Grid   container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '10vh' }}>
                <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                    <ListItem secondaryAction={
                        <IconButton onClick = {modalClick} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                            <EditIcon />
                        </IconButton>} button>
                        <ListItemText primary="Fred Dundert" fontsize="0.7em"/>
                    </ListItem>
                    <Divider light/>
                    <ListItem secondaryAction={
                        <IconButton onClick = {modalClick} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                            <EditIcon />
                        </IconButton>} button>
                        <ListItemText primary="Danny Sins" fontsize="0.7em"/>
                    </ListItem>
                </List>
            </Grid>

      <Dialog
        open={isClicked}
        keepMounted
        onClose={modalClick}
      >
        <DialogTitle>{"Example Student"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="birthday"
            label="Birthday"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="grade"
            label="Grade"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={modalClick}>Save</Button>
          <Button onClick={modalClick}>Exit</Button>
        </DialogActions>
      </Dialog>
        </>
    );
}

export default StudentDirectory;