import React, { useEffect, useState } from 'react';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Notes(props) {
  const [noteData, setNoteData] = useState(undefined)
  const [id, setId] = useState(3);  //if  a user is logged in, we will setId to the corresponding user id.

  const [ratingData, setRatingData] = useState(undefined)

  //hard-coded for now
  // const id = 3;
  useEffect(() => {
    fetch(`/notes/${id}`).then(
      res => res.json())
      .then(data => setNoteData(data))
  }, [])


  return (
    <div>
      <h1 text align= "center"> Your notes</h1>
      {noteData ? (noteData.userNotes.map((note, i) => (
      
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
  );
}
