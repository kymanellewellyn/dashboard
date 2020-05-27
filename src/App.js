
import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from './firebase.js';

import Dashboard from './Components/Dashboard/Dashboard';


class App extends Component {

  constructor(){
    super();
    this.state = {   
      teachers : [
        {
          firstName: 'Rick',
          lastName: 'Sanchez',
          classes : 
            [
              {
                class: 'launch',
                subject: 'software engineering',
                students: [
                            {
                              firstName: 'Kymane',
                              lastName: 'Llewellyn',
                              grade: 'A',
                              isPassing: true
                            },
                          ]
              },
            ], 
          },
      ]
    }
  }  


  addStudent = () => {

  }

  addTeacher = () => {
    
  }

  editStudent = () => {

  }

  editTeacher = () => {
    
  }

  deleteStudent = () => {
    
  }

  deleteTeacher = () => {
    
  }

  signIn = () => {

  }

  signUp = () => {

  }

  
  render() {
    return (
      <div>
        <header>Admin Dashboard</header>
          <Dashboard teacher = {this.state.teachers}/>                
      </div>
    )
  }
}

export default App;
