import React, { useEffect, useState } from 'react';
import './AddNotes.css'
import { Container } from "react-bootstrap";
import Main from "./Main";
import Sidebar from "./Sidebar";
export default function AddNote (){
  const [noteData, setNoteData] = useState(undefined)


  useEffect(() => {
    fetch(`/notes`).then(
      res => res.json())
      .then(data => setNoteData(data))
  }, [])
  return (
    <Container fluid>

    <div className="main-div">

      <Sidebar noteData={noteData} />
      <Main />
    </div>
      
      
  
     </Container>
  )
}