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
          <Route path="/user" element={<User/>} /> 
          <Route path="/note" element={<Notes/>} /> 
          <Route path="/add" element={<AddNote/>} /> 
        </Routes>
      </div>
      <Dashboard />
    </div>
  
  );
}

export default App;
