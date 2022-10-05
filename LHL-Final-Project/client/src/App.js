import './App.css';
import React from 'react';
import User from "./components/User";
import Notes from "./components/Notes";
import NavBar from './components/NavBar';
import AddNote from './components/AddNote';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
      <NavBar />
      <div className='content'>
        <Routes>
        {/* change to <Dashboard/> */}
          <Route path="/dashboard" element={<Dashboard/>} /> 
        </Routes>
      </div>
    
    </div>
  
  );
}

export default App;
