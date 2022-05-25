import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import {List, ListItem, ListItemText, IconButton, Grid, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import db from '../firebase.js'
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";

const StudentDirectory = () => {

    const [students, setStudents] = useState([])

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
            <Grid   container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '10vh' }}>
                <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                    <ListItem secondaryAction={
                        <IconButton edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                            <EditIcon />
                        </IconButton>} button>
                        <ListItemText primary="Fred Dundert" fontsize="0.7em"/>
                    </ListItem>
                    <Divider light/>
                    <ListItem secondaryAction={
                        <IconButton edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                            <EditIcon />
                        </IconButton>} button>
                        <ListItemText primary="Danny Sins" fontsize="0.7em"/>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default StudentDirectory;