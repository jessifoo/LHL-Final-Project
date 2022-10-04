import React, { useEffect, useState } from 'react';

export default function Notes(props) {
  const [noteData, setNoteData] = useState(undefined)
  //const [id, setId] = useState(3)  if  a user is logged in, we will setId to the corresponding user id.

  const [ratingData, setRatingData] = useState(undefined)

  //hard-coded for now
  const id = 3;
  useEffect(() => {
    fetch(`/notes/${id}`).then(
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
      {noteData ? (noteData.userNotes.map((note, i) => (
        <div key={i}>
          <p>{note.title}</p>
          <p>{note.body} </p>
          <p>{note.body} </p>
        </div>
      ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
