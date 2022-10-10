// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import { noteContext } from 'providers/NoteProvider';
import './Notes.css';
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button';
import { BsTrash } from 'react-icons/bs';

// eslint-disable-next-line no-unused-vars
export default function Notes(props) {
    const {noteData} = useContext(noteContext);

    //hard-coded for now
    // const id = 1;
    //   useEffect(() => {
    //     loadNotes(id)
    //  //pass a function here that sets note data
    //   }, [])

    const noteList = noteData.map((note, i) => (


        <ul key={i}>
            <div>

                <div className="card-container">

                    <Card border="dark" key={i} style={{width: '80rem'}} href="/addNotes">
                        <Card.Body>
                            <Card.Title className="text-center">{note.title}</Card.Title>
                            {<div className=" text-right">
                                <button type="button" className="btn btn-outline-primary">Edit</button>
                                <button type="button" className="btn btn-outline-danger">Delete</button>
                            </div>}
                            <Card.Text>{note.body.slice(0, 300) + '.....'}</Card.Text>
                            <Card.Link href="/viewNote"><p className="text-center">View note</p></Card.Link>
                            <button type="button" className="btn btn-outline-danger"><BsTrash size={20}/></button>


                        </Card.Body>
                    </Card>
                </div>
            </div>
        </ul>
    ));
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
            <h1 className="text-center"> Your notes</h1>

            {noteList}
        </div>
    );

    //     { <div onClick={() => alert("Hello from here")}>
    //       {noteData ? (noteData.notes.map((note, i) => (
    //         <ul>
    //               HEAD
    //           <div className= "card-container" >
    //               <Card key={i} style={{ width: '80rem' }}>
    //               <Card.Body>
    //                 <Card.Title className="text-center">{note.title}</Card.Title>
    //                 <div  className=" text-right">
    //                   { <button type="button" className="btn btn-outline-primary">Edit</button> }
    //                    <button type="button" className="btn btn-outline-danger"><BsTrash size={20} /></button> </div>

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
}





