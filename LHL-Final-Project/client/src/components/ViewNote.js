import React, { useEffect, useState } from 'react';
import './Notes.css'
import Card from 'react-bootstrap/Card';
export default function ViewNote() {

  return (
    <div>
    <h1 text align= "center"> Your notes</h1>
    {noteData ? (noteData.notes.map((note, i) => (
    
      <ul>

        <Card border="dark" key={i} style={{ width: '80rem' }} href="/addNotes" >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            {/* <div  class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div> */}
            <Card.Text >{note.body.substr(0,300) + "....."}</Card.Text>
            <Card.Link href="/addNotes"><p text align="center"  decoration="none">View note</p></Card.Link>

          </Card.Body>
        </Card>

      </ul>
    ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}