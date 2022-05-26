import { React, useState, useRef } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {doc, updateDoc} from "firebase/firestore";
import db from "../firebase.js";

const EditStaff = (props) => {

    console.log(props);
    console.log("here");

    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const firstnameForm = useRef();
    const lastnameForm = useRef();

    function modalClick(e){
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    function deleteClick(e){
        e.preventDefault();
        setIsDeleteOpen(!isDeleteOpen);
    };
    
    const updateStaffInfo = async() => {
        console.log("Saved First Name: ", firstnameForm.current.value);
        console.log("Saved Last Name: ", lastnameForm.current.value);
        let obj = {
            firstname: firstnameForm.current.value,
            lastname: lastnameForm.current.value,
        }
        console.log(obj);
        await updateDoc(doc(db, "staff", props.memberId), obj);
    };

    const hoverStyle = {
        bgcolor: '#ADD8E6',
        '&:hover $child': {
            color: 'blue'
        }
    };

    return (
        <>
        <div key={props.memberId}>
        <ListItem style={{ hoverStyle }}>
            <ListItemText primary={<p>{props.firstname} {props.lastname}</p>} fontSize="1em"/>
            <ListItemIcon>
                <IconButton onClick={e => modalClick(e)} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                    <EditIcon />
                </IconButton>
            </ListItemIcon>
            <ListItemIcon>
                <IconButton onClick={e => deleteClick(e)} edge="end" style={{ color: 'white', backgroundColor: 'red'}}>
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
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => {updateStaffInfo(); modalClick(e)}}>Save</Button>
                <Button onClick={modalClick}>Exit</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={isDeleteOpen}>
            <DialogTitle>Are you sure you want to delete this staff's profile ({props.firstname} {props.lastname})?</DialogTitle>
            <DialogActions>
                <Button onClick={deleteClick}>Confirm</Button>
                <Button onClick={deleteClick}>Exit</Button>
            </DialogActions>
        </Dialog>
        </>
    );
};

export default EditStaff;