import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import {List, IconButton, Grid} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import {collection, getDocs} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import EditStaff from './EditStaff.js';

const TeacherDirectory = () => {

    const {state} = useLocation();
    const { username } = state; /*the user */

    const [staff, setStaff] = useState([])

    const printStaff = async () => {
        const documents = await getDocs(collection(db, "staff"));
        console.log(documents);
        let list = [];
        documents.forEach((member) => list.push({id: member.id, ...member.data()}));
        setStaff(list);
    }

    useEffect(() => {
        printStaff();
    }, []);

    const commonStyles = {
        bgcolor: '#ADD8E6',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '80vh',
    };

    console.log(staff)

    return (
        <>
        <Navbar />
        <h1>Staff Directory</h1>
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <p>Add Teacher: </p>
            <IconButton>
                <AddReactionIcon />
            </IconButton>
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
            <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                {
                    staff.map((member) => {
                        console.log(member)
                        return (<EditStaff memberId={member.id} firstname={member.firstname} 
                            lastname={member.lastname}/>)
                    })
                }
            </List>
        </Grid>
        </>
    );
}

export default TeacherDirectory;
