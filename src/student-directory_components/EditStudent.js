import { React, useState } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const EditStudent = (props) => {

    console.log(props);
    console.log("here")

    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    function modalClick(e){
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    function deleteClick(e){
        e.preventDefault();
        setIsDeleteOpen(!isDeleteOpen);
    }
    
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

    const hoverStyle = {
        bgcolor: '#ADD8E6',
        '&:hover $child': {
            color: 'blue'
        }
    };

    return (
        <>
        <div key={props.studentId}>
        <ListItem style={{ hoverStyle }}>
            <ListItemText primary={props.firstname} fontSize="0.7em"/>
            <ListItemIcon>
                <IconButton onClick={e => modalClick(e)} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                    <EditIcon />
                </IconButton>
            </ListItemIcon>
            <ListItemIcon>
                <IconButton onClick = {e => deleteClick(e)} edge="end" style={{ color: 'white', backgroundColor: 'red'}}>
                    <PersonRemoveIcon />
                </IconButton>
            </ListItemIcon>
        </ListItem>
        <Divider light/>
        </div>

        <Dialog open={isOpen}>
            <DialogTitle>{props.firstname} {props.lastname}</DialogTitle>
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
        <Dialog open={isDeleteOpen}>
            <DialogTitle>Are you sure you want to delete {props.firstname}?</DialogTitle>
            <DialogActions>
                <Button onClick={deleteClick}>Save</Button>
                <Button onClick={deleteClick}>Exit</Button>
            </DialogActions>
        </Dialog>
        </>
        
    );
};

export default EditStudent;