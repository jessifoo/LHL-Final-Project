import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import AddNote from './components/AddNote';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import NoteProvider from './providers/NoteProvider';
import ViewHistoryNotes from './components/ViewHistoryNotes';
import ViewMathNotes from './components/ViewMathNotes';
import ViewLiteratureNotes from './components/ViewLiteratureNotes';
import ViewNote from './components/ViewNote';

function App() {
const id = 1;
  return (
    <div className='fixed-content'>
      <NavBar />
      <div className='content'>
        <NoteProvider>
        <Routes>
        {/* change to <Dashboard/> */}
          
          <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="/addNotes"  element={<AddNote/>} />
          <Route path="/historyNotes" element={<ViewHistoryNotes/>} />
          <Route path="/mathNotes"  element={<ViewMathNotes/>} />
          <Route path="/literatureNotes" element={<ViewLiteratureNotes/>} />
          <Route path="/viewNote" element={<ViewNote id={id}/>} />
        </Routes>
        </NoteProvider>
        
      </div>
    
    </div>
  
  );
}

export default App;
