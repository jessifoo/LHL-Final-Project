import './App.css';
import React from 'react';
import User from "./components/User";
import Notes from "./components/Notes";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <User  />
      <Notes />

    </div>
  );
}

export default App;
