import { useState } from "react"


export default function Main(props) {

const[title, setTitle] = useState( "")
const[body, setBody] = useState( "")
  
function reset() {
  setTitle("")
  setBody("")
}

// function cancel() {
//   reset()
//   setError("");
//   props.onCancel()

// }


function createNote(id) {

    fetch("/notes", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        user_id: id,
        class_id: 1,
        semester_id: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    }).then(res => res.json())
      .then(data => console.log(data))
      reset()
  }

  return (
    <div className="app-main">
      <div align="center">
        <form>
          <input placeholder="enter class name" mandatory="true" />
          <input placeholder="enter semester" />
          <button> Save</button>
        </form>

      </div>
      <form>
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus placeholder="Enter title here" required value={title} 
        onChange={(e) => { setTitle(e.target.value) }}
/>
        <textarea id="body" placeholder="Write your note here..." value={body}             
        onChange={(e) => { setBody(e.target.value) }}
/>
        <button type="button" class="btn btn-primary" onClick={() => createNote(props.id)}>Add note</button>
      </div>
      </form>
      <br></br>
      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div>
      </div>
    </div>
  )
}