import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
<<<<<<< HEAD
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
=======
import db from '../firebase.js'
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";

const [students, setStudents] = useState([])

useEffect(() => {
  const students = []
  getDocs(collection(db, "students"))
  .then((allStudents) => allStudents.forEach((student) => students.push({id: student.id, ...student.data()}))
  )
  setStudents(students)
}, [db])

const editName = () => {

}

const editBirth = () => {
  
}
>>>>>>> origin/lukebranch

const StudentDirectory = () => {

    return (
        <>
            <Navbar />
            <h1>Student Directory</h1>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {

                return (
                <ListItem
                    key={value}
                    secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        <EditIcon />
                    </IconButton>
                    }
                    disablePadding
                >
                </ListItem>
                );
            })}
            </List>
        </>
    );
}

export default StudentDirectory;