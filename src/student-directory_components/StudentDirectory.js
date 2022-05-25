import React from 'react';
import Navbar from '../Navbar.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

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