import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { noteContext } from 'providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Notes(props) {
  const { noteData,} = useContext(noteContext);

  //hard-coded for now
  const id = 1;
//   useEffect(() => {
//     loadNotes(id)
//  //pass a function here that sets note data
//   }, [])

const noteList = noteData.map((note, i) => (
      
 
<ul>

    <Card border="dark" key={i} style={{ width: '80rem' }} href="/addNotes" >
      <Card.Body>
        <Card.Title className="text-center">{note.title}</Card.Title>
        {/* <div  class=" text-right">
          <button type="button" class="btn btn-outline-primary">Edit</button>
          <button type="button" class="btn btn-outline-danger">Delete</button>
        </div> */}
        <Card.Text >{note.body.substr(0,300) + "....."}</Card.Text>
        <Card.Link href="/viewNote"><p text align="center"  decoration="none">View note</p></Card.Link>

      </Card.Body>
    </Card>
</ul>
))


  return (
    <div>
      <h1 text align= "center"> Your notes</h1>
      
        {noteList}
      
    </div>
  );
}
