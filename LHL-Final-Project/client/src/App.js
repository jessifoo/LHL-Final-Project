import React from 'react';
import User from "./components/User";
import Notes from "./components/Notes";
import NavBar from './components/NavBar';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Notify from './components/Notify';
import AddNote from './components/AddNote';
import './App.css';


function App() {

  return (
    <div>
      <NavBar />
      <div className='content'>
        <Routes>
        {/* change to <Dashboard/> */}
          <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="/auth" element={<Auth/>} /> 
          <Route path="/notify" element={<Notify/>} /> 
        </Routes>
      </div>
    
    </div>
  
  );
}

export default App;
