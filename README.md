# App Info

This project uses Javascript libraries and React framework. Includes Material UI, Firebase, Router-dom
Install the following packages: npm install _ \
firebase
@mui/material
@emotion/react
@emotion/styled
@mui/icons-material
react-router-dom
@fullcalendar/react
@fullcalendar/daygrid

# Firebase Info

Once firebase has been created, paste in the .env file and gitignore .env file as such: \
REACT_APP_apiKey= \
REACT_APP_authDomain= \
REACT_APP_projectId= \
REACT_APP_storageBucket= \
REACT_APP_messagingSenderId= \
REACT_APP_appId=

The database format is as shown: collection -> documents -> fields \
students -> student_Katie_Smith -> (birthday: "05-25-2022", firstname: "Katie", grade: "10", lastname: "Smith")\
staff -> teach1 -> (isAdmin: false, isLogged: false, firstname: "Jack", lastname: "Smith", password: "pass1", username: "teach1")\
events -> event1 -> (date: "2022-05-01", title: "event 1")\
classes -> math -> (name: "math101")\
grades -> math101 -> (Katie Smith: "80", teacher: "Jack Smith")

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
