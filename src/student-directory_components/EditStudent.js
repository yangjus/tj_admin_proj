import { React, useState, useRef } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {doc, updateDoc} from "firebase/firestore";
import db from "../firebase.js";

const EditStudent = (props) => {

    console.log(props);
    console.log("here");

    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const firstnameForm = useRef();
    const lastnameForm = useRef();
    const birthdayForm = useRef();
    const gradeForm = useRef();

    function modalClick(e){
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    function deleteClick(e){
        e.preventDefault();
        setIsDeleteOpen(!isDeleteOpen);
    };
    
    const updateStudentInfo = async() => {
        await updateDoc(doc(db, "students", props.studentId)), {
            firstname: firstnameForm.current.value,
            lastname: lastnameForm.current.value,
            grade: gradeForm.current.value,
            birthday: birthdayForm.current.value
        }
        console.log("Saved First Name: ", firstnameForm.current.value);
        console.log("Saved Last Name: ", lastnameForm.current.value);
        console.log("Saved Grade: ", gradeForm.current.value);
        console.log("Saved Birthday: ", birthdayForm.current.value);
    };

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
                <TextField autoFocus margin="dense" inputRef={firstnameForm} defaultValue={props.firstname} 
                id="firstname" label="First Name" type="text" fullWidth variant="standard"/>
                <TextField autoFocus margin="dense" inputRef={lastnameForm} defaultValue={props.lastname} 
                id="lastname" label="Last Name" type="text" fullWidth variant="standard"/>
                <TextField autoFocus margin="dense" inputRef={gradeForm} defaultValue={props.grade} 
                id="grade" label="Grade" type="text" fullWidth variant="standard"/>
                <TextField autoFocus margin="dense" inputRef={birthdayForm} defaultValue={props.birthday} 
                id="birthday" label="Birthday" type="text" fullWidth variant="standard"/>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {updateStudentInfo(); modalClick}}>Save</Button>
                <Button onClick={modalClick}>Exit</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={isDeleteOpen}>
            <DialogTitle>Are you sure you want to delete this student's profile ({props.firstname})?</DialogTitle>
            <DialogActions>
                <Button onClick={deleteClick}>Save</Button>
                <Button onClick={deleteClick}>Exit</Button>
            </DialogActions>
        </Dialog>
        </>
        
    );
};

export default EditStudent;