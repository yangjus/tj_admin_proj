import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
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

const StudentDirectory = () => {

    return (
        <>
            <Navbar />
            <h1>This is the Student Directory page</h1>
        </>
    );
}

export default StudentDirectory;