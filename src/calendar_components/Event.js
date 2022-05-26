import {Button, Dialog, DialogContent, DialogTitle, TextField, Typography, Grid} from '@mui/material';
import db from '../firebase.js'
import {collection, doc, getDocs, updateDoc, setDoc, deleteDoc} from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

function Event(props) {
  let navigate = useNavigate()
  const {state} = useLocation();
  const { username } = state || {};

  async function deleteEvent(){
    await deleteDoc(doc(db, "events", props.data.title));
    console.log(props.data.title)
    navigate("/calendar", { state: {username: username}})
  }

  console.log(props.data)
  return (
    <div className="Event">
      <p> Name: {props.data.title} Date: {props.data.date} </p>
      <Button onClick={props.func(props.data.title)} variant="contained">Delete</Button>
    </div>
  );
}

export default Event;
