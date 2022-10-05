import './App.css';
import React from 'react';
import User from "./components/User";
import Notes from "./components/Notes";
import NavBar from './components/NavBar';
import AddNote from './components/AddNote';


function App() {

  return (
    <div>
      <NavBar />
      <div className='content'>

      <User  />
      <Notes />
      <AddNote/>
      </div>
    </div>
  );
}

export default App;
