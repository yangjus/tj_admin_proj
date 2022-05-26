import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import {List, ListItem, ListItemIcon, ListItemText, IconButton, Grid, Divider, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import {Modal, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const StudentDirectory = () => {

    const {state} = useLocation();
    const { username } = state; /*the user */
    const [isClicked, setIsClicked] = useState(false);

    const [students, setStudents] = useState([])

    const printStudents = async () => {
        const documents = await getDocs(collection(db, "students"));
        console.log(documents);
        let list = [];
        documents.forEach((student) => list.push({id: student.id, ...student.data()}));
        setStudents(list);
    }
    
    useEffect(() => {
        printStudents();
    }, []);

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

    function modalClick(studentID){
        setIsClicked(!isClicked)
    }

    const commonStyles = {
        bgcolor: '#ADD8E6',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '80vh',
    };

    const hoverStyle = {
        bgcolor: '#ADD8E6',
        '&:hover $child': {
            color: 'blue'
        }
    };

    return (
        <>
            <Navbar />
            <h1>Student Directory</h1>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <p>Add Student: </p>
                <IconButton>
                    <AddReactionIcon />
                </IconButton>
            </Grid>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
                <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                    {
                        students.map((student) => {
                            return (
                                <div key={student.id}>
                                <ListItem style={{ hoverStyle }}>
                                    <ListItemText primary={student.firstname} fontSize="0.7em"/>
                                    <ListItemIcon>
                                        <IconButton onClick={() => {modalClick(student.id); }} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                                            <EditIcon />
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemIcon>
                                        <IconButton edge="end" style={{ color: 'white', backgroundColor: 'red'}}>
                                            <PersonRemoveIcon />
                                        </IconButton>
                                    </ListItemIcon>
                                </ListItem>
                                <Divider light/>
                                </div>
                            )
                        })
                    }
                </List>
            </Grid>
            <Dialog open={isClicked} keepMounted onClose={modalClick}>
                <DialogTitle>{"Example Student"}</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="firstname" label="First Name" type="text" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="lastname" label="Last Name" type="text" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="grade" label="Grade" type="text" fullWidth variant="standard"/>
                    <TextField autoFocus margin="dense" id="birthday" label="Birthday" type="text" fullWidth variant="standard"/>
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