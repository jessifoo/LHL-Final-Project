import React, { useEffect, useState } from 'react';

export default function Notes(props) {
  const [noteData, setNoteData] = useState(undefined)


  useEffect(() => {
    fetch("/notes").then(
      res => res.json())
      .then(data => setNoteData(data))
  }, [])
    
  
      console.log("NOTE DATA: ", noteData)
  return (
    <div>
      {noteData ? ( 
      <div>
        <p>{noteData.notes[0].title}</p> 
        <p>{noteData.notes[0].body} </p> 
      </div>
        
        ) : (
          
          <p>Loading...</p>
      )}
  
    </div>

  );
}
