import { useState } from "react"


export default function Sidebar({ noteData }) {

  const [noteId, setNoteId] = useState(null)
  function deleteNote(note) {
    setNoteId(note.id)
    fetch(`/notes/delete/${noteId}`, {
      method: "POST"

    }).then(res => res.json())
      .then(data => console.log(data))
    // reset()


  }

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button>Add</button>
      </div>
      <div className="app-sidebar-notes" >
        {noteData ? (noteData.userNotes.map((note, i) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={()=> deleteNote(note)}>Delete</button>
            </div>

            <p>{note.body.substr(0, 100) + "....."}</p>

            <small className="note-meta">Last modified {note.publishdate}</small>
          </div>


        ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )




}