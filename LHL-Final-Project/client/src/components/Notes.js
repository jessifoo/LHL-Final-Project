import React, { useEffect, useState } from 'react';
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

  /*useEffect(() => {
    fetch(`/ratings/${id}`).then(
      res => res.json())
      .then(data => setRatingData(data))
  }, [])*/

  // if note_id === noteRating.note_id
  //   then show the rating
  //   else don't

  return (
    <div>
      {noteData ? (noteData.notes.map((note, i) => (
      

          <Card key={i} style={{ width: '80rem'}}>
            <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Button variant="outline-primary">Edit</Button>{' '}
            <Button variant="outline-danger">Delete</Button>{' '}
            </Card.Body>
          </Card>
        
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
