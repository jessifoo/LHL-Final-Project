

export default function Sidebar({noteData}) {


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
            <button>Delete</button>
          </div>

          <p>{note.body.substr(0,100) + "....."}</p>

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