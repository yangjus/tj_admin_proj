import { React, useState, useRef } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Typography} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {doc, updateDoc, deleteDoc, getDocs, collection} from "firebase/firestore";
import db from "../firebase.js";

const ClassInfo = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState("");
  const [listOfStudents, setListOfStudents] = useState([]);
  const [average, setAverage] = useState([]);

  function ClassesOpen(e){
      e.preventDefault();
      setIsOpen(!isOpen);
  };

  const hoverStyle = {
    bgcolor: '#ADD8E6',
    '&:hover $child': {
        color: 'blue'
    }
  };

  const showStudents = async () => {
    const documents = await getDocs(collection(db, "grades"));
    let list = [];
    documents.forEach((classes) => list.push({id: classes.id, ...classes.data()}));
    for (let i = 0; i < list.length; i++){
      if (props.name == list[i].id){
        setTeacher(list[i].teacher)
      }
    }
    setStudents(list)
    let templist = []
    for (let i = 0; i < list.length; i++){
      if (props.name == list[i].id){
        Object.keys(list[i]).map(function(key, index) {
          if (key != "id" && key != "teacher"){
            templist.push(key)
          }
        });
      }
    }
    setListOfStudents(templist)
    let tempListOfGrades = []
    for (let i = 0; i < list.length; i++){
      if (props.name == list[i].id){
        Object.keys(list[i]).map(function(key, index) {
          if (key != "id" && key != "teacher"){
            tempListOfGrades.push(list[i][key])
          }
        });
      }
    }
    let grade = 0
    let j = 0
    for (let i = 0; i < tempListOfGrades.length; i++){
      console.log(parseInt(tempListOfGrades[i]))
      grade = grade + parseInt(tempListOfGrades[i]);
      j++;
    }
    console.log(grade)
    grade = grade/j;
    console.log(grade)
    setAverage(grade)

  }

  return(
    <>
      <div key={props.memberId}>
      <ListItem style={{ hoverStyle }}>
          <ListItemText primary={<p>{props.name}</p>} fontSize="1em"/>
          <ListItemIcon>
              <IconButton onClick={e => {ClassesOpen(e); showStudents()}} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                  <InfoIcon />
              </IconButton>
          </ListItemIcon>
      </ListItem>
      <Divider light/>
      </div>

      <Dialog open={isOpen}>
            <Grid item marginTop={2} marginLeft={25} alignItems="center">
              <ClearIcon onClick={ClassesOpen}></ClearIcon>
            </Grid>
            <Grid>
              <h3><b>{props.name}</b></h3>
            </Grid>
            <Grid>
              <Typography><b>Teacher:</b> {teacher}</Typography>
            </Grid>
            <Typography><b>Class Average:</b> {average} %</Typography>
            <p><b>List of Students:</b></p>
            {Object.entries(listOfStudents)
              .map( ([key, value]) =>
              <ListItem>
                <ListItemText>{value}</ListItemText>
              </ListItem>
             )}
            <DialogContent>

            </DialogContent>
        </Dialog>
    </>
  )
}

export default ClassInfo;