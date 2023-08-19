import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';
import AddEmployee from './pages/dashboard/AddEmployee';
import { fetchUserData } from './api/authenticationService';


function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
            
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route  path = "/add-employee" component = {AddEmployee } />
           <Route  path = "/edit-employee/:id" component = {AddEmployee } /> 
           
          </Switch>
      </BrowserRouter>
  );
}

export default App;
