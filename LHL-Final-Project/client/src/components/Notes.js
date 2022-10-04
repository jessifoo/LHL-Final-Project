import React, { useEffect, useState } from 'react';

export default function Notes(props) {
  const [noteData, setNoteData] = useState(undefined)
  //const [id, setId] = useState(3)  if  a user is logged in, we will setId to the corresponding user id.

  //hard-coded for now
  const id = 3;
  useEffect(() => {
    fetch(`/notes/${id}`).then(
      res => res.json())
      .then(data => setNoteData(data))
  }, [])


  return (
    <div>
      {noteData ? (noteData.userNotes.map((note, i) => (
        <div key={i}>
          <p>{note.title}</p>
          <p>{note.body} </p>
        </div>
      ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
