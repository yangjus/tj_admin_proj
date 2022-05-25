import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
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

    return (
        <>
            <Navbar />
            <h1>Student Directory</h1>
            <Grid justify="center">
                <List>
                    <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        <EditIcon />
                    </IconButton> } disablePadding>
                        Hello
                    </ListItem>
                    <ListItem>
                        Hello2
                        <EditIcon edge="end"/>
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}

export default StudentDirectory;