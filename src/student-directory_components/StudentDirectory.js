import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import db from '../firebase.js'
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";


const StudentDirectory = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    const students = []
    getDocs(collection(db, "students"))
    .then((allStudents) => allStudents.forEach((student) => students.push({id: student.id, ...student.data()}))
    )
    setStudents(students)
  }, [db])
  
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

    return (
        <>
            <Navbar />
            <h1>This is the Student Directory page</h1>
        </>
    );
}

export default StudentDirectory;