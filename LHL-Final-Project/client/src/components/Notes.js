import React, { useEffect, useState } from 'react';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Notes(props) {
  const [noteData, setNoteData] = useState(undefined)
  //const [id, setId] = useState(3)  if  a user is logged in, we will setId to the corresponding user id.

  const [ratingData, setRatingData] = useState(undefined)

  //hard-coded for now
  // const id = 3;
  useEffect(() => {
    fetch(`/notes`).then(
      res => res.json())
      .then(data => setNoteData(data))
  }, [])


  return (
    <div>
      {noteData ? (noteData.notes.map((note, i) => (

        <ul>

          <Card key={i} style={{ width: '80rem' }}>
            <Card.Body>
              <Card.Title className="text-center">{note.title}</Card.Title>
              <div  class=" text-right">
                <button type="button" class="btn btn-outline-primary">Edit</button>
                <button type="button" class="btn btn-outline-danger">Delete</button>
              </div>
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
