import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar.js';
import {List, IconButton, Grid, Dialog, DialogActions, Button} from '@mui/material';
import {DialogTitle, DialogContent, TextField, Checkbox} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import {collection, getDocs, setDoc, doc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import EditStaff from './EditStaff.js';

const TeacherDirectory = () => {

    const state = useLocation();
    console.log(location);
    const { userId } = state || {}; /*the user */
    console.log("userid: ", userId);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [disableChanges, setDisableChanges] = useState(false); /* for disabling add, edit, delete if not admin */

    const [staff, setStaff] = useState([])

    const firstnameForm = useRef();
    const lastnameForm = useRef();
    const adminForm = useRef();
    const usernameForm = useRef();
    const passwordForm = useRef();

    const printStaff = async () => {
        const documents = await getDocs(collection(db, "staff"));
        console.log(documents);
        let list = [];
        documents.forEach((member) => list.push({id: member.id, ...member.data()}));
        setStaff(list);

    }

    const getPermissions = async () => {
        const document = await getDocs(doc(db, "staff", userId));
        console.log("permissions here: ", document)
        setDisableChanges(document.get("isAdmin"));
    }

    useEffect(() => {
        getPermissions();
        printStaff();
    }, []);

    const commonStyles = {
        bgcolor: '#ADD8E6',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '80vh',
    };

    function addClick(e){
        e.preventDefault();
        setIsAddOpen(!isAddOpen);
    };

    const addStaff = async() => {
        let nameIdString = "";
        if (adminForm.current.checked) {
            nameIdString += "admin_" + String(firstnameForm.current.value) + "_" + String(lastnameForm.current.value);
        }
        else {
            nameIdString += "teacher_" + String(firstnameForm.current.value) + "_" + String(lastnameForm.current.value);
        }
        console.log(nameIdString);
        let obj = {
            firstname: firstnameForm.current.value,
            lastname: lastnameForm.current.value,
            isAdmin: adminForm.current.checked,
            isLogged: false,
            username: usernameForm.current.value,
            password: passwordForm.current.value,
            userID: nameIdString
        }
        console.log(obj);
        await setDoc(doc(db, "staff", nameIdString), obj);
    };

    return (
        <>
        <Navbar />
        <h1>Staff Directory</h1>
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <p>Add Staff Member: </p>
            <IconButton onClick={e => addClick(e)} disabled={disableChanges}>
                <AddReactionIcon />
            </IconButton>
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
            <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                {
                    staff.map((member) => {
                        console.log(member)
                        return (<EditStaff memberId={member.id} firstname={member.firstname} lastname={member.lastname} 
                            username={member.username} password={member.password} willDisable={disableChanges}/>)
                    })
                }
            </List>
        </Grid>
        <Dialog open={isAddOpen}>
            <DialogTitle>Add New Staff Member</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" inputRef={firstnameForm} 
                id="firstname" label="First Name" type="text" fullWidth variant="standard"/>
                <TextField autoFocus margin="dense" inputRef={lastnameForm} 
                id="lastname" label="Last Name" type="text" fullWidth variant="standard"/>
                <TextField autoFocus margin="dense" inputRef={usernameForm}
                id="firstname" label="Username" type="text" fullWidth variant="standard"/>
                <TextField autoFocus margin="dense" inputRef={passwordForm}
                id="lastname" label="Password" type="text" fullWidth variant="standard"/>
                <Grid container direction="row">
                    <p>isAdmin? </p>
                    <Checkbox label="isAdmin" inputRef={adminForm} />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => {addStaff(); addClick(e)}}>Create</Button>
                <Button onClick={addClick}>Exit</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default TeacherDirectory;
