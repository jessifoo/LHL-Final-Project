import React, { useEffect, useState } from 'react';
import './AddNotes.css'
import { Container } from "react-bootstrap";
import Main from "./Main";
import Sidebar from "./Sidebar";
export default function AddNote (){
  const [noteData, setNoteData] = useState(undefined)
  const [id, setId] = useState(1);  //if  a user is logged in, we will setId to the corresponding user id.


  useEffect(() => {
    fetch(`/notes/${id}`).then(
      res => res.json())
      .then(data => setNoteData(data))
  }, [])
  return (
    <Container fluid>

    <div className="main-div">

      <Sidebar noteData={noteData} />
      <Main id={id} noteData={noteData}/>
    </div>
      
      
  
     </Container>
  )
}