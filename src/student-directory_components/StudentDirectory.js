import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import {List, ListItem, ListItemIcon, ListItemText, IconButton, Grid, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import { useLocation } from "react-router-dom";

const StudentDirectory = () => {

    const {state} = useLocation();
    const { username } = state; /*the user */

    const [students, setStudents] = useState([])

    const printStudents = () => {
        const documents = getDocs(collection(db, "students"));
        let list = [];
        documents.forEach((student) => list.push({id: student.id, ...student.data()}));
        setStudents(list);
    }
    
    useEffect(() => {
        printStudents();
        console.log(documents);
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
            <Grid   container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '10vh' }}>
                <p>Add Student: </p>
                <IconButton padding="5px">
                    <AddReactionIcon />
                </IconButton>
                <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                    {
                        students.map((student) => {
                            return (
                                <>
                                <ListItem style={{ hoverStyle }}>
                                    <ListItemText primary={student.firstname} fontSize="0.7em"/>
                                    <ListItemIcon>
                                        <IconButton edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
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
                                </>
                            )
                        })
                    }
                </List>
            </Grid>
        </>
    );
}

export default StudentDirectory;
