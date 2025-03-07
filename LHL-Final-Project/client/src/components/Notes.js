import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { noteContext } from 'providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsTrash } from 'react-icons/bs';

export default function Notes(props) {
  const { noteData,} = useContext(noteContext);

  //hard-coded for now
  const id = 1;
//   useEffect(() => {
//     loadNotes(id)
//  //pass a function here that sets note data
//   }, [])

const noteList = noteData.map((note, i) => (
      
 
<ul>
<div onClick={() => alert("Hello from here")}>

  <div className= "card-container" >
  
    <Card border="dark" key={i} style={{ width: '80rem' }} href="/addNotes" >
      <Card.Body>
        <Card.Title className="text-center">{note.title}</Card.Title>
        { <div  class=" text-right">
          <button type="button" class="btn btn-outline-primary">Edit</button>
          <button type="button" class="btn btn-outline-danger">Delete</button>
        </div> }
        <Card.Text >{note.body.substr(0,300) + "....."}</Card.Text>
        <Card.Link href="/viewNote"><p text align="center"  decoration="none">View note</p></Card.Link>
        <button type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button> 
      

      </Card.Body>
    </Card>
    </div>
    </div>
</ul>
))
  //const [noteData, setNoteData] = useState(undefined)
  //const [id, setId] = useState(3)  if  a user is logged in, we will setId to the corresponding user id.


  //use localStorage data to auto populate
  // const id = JSON.parse(localStorage.getItem('notifyUser')).id
  // console.log("ID: ", id)
  // const id = 3;
  // useEffect(() => {
  //   fetch(`/notes`).then(
  //     res => res.json())
  //     .then(data => setNoteData(data))
  // }, [])

  return (
    <div>
      <h1 text align= "center"> Your notes</h1>
      
        {noteList}
</div>
)

//     { <div onClick={() => alert("Hello from here")}>
//       {noteData ? (noteData.notes.map((note, i) => (
//         <ul>
//               HEAD
//           <div className= "card-container" >
//               <Card key={i} style={{ width: '80rem' }}>
//               <Card.Body>
//                 <Card.Title className="text-center">{note.title}</Card.Title>
//                 <div  class=" text-right">
//                   { <button type="button" class="btn btn-outline-primary">Edit</button> }
//                    <button type="button" class="btn btn-outline-danger"><BsTrash size={20} /></button> </div>
                
//               </Card.Body>
//             </Card>
//            </div>

    
//           </ul>
//       ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// } }





