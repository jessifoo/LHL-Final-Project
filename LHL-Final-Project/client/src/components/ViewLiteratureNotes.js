import React from 'react';
import { useContext } from 'react';
import { noteContext } from 'providers/NoteProvider';
import './Notes.css';
import Card from 'react-bootstrap/Card';
import '../App.css';


// export default function HistoryNotes() {

//   const {allNotes, setAllNotes} = useContext(noteContext);

//   const noteList = allNotes.filter((note) => note.name ==="history")

// }




export default function ViewLiteratureNotes() {

    const {allNotes} = useContext(noteContext);

    const noteList = allNotes.filter((note) => note.class_id === 3);
    //console.log(noteList)

    const noteListed = noteList.map((note, i) => (
      
        <ul key={i}>
    
    
            <Card border="dark" key={i} style={{ width: '80rem' }} href="/addNotes" >
                <Card.Body>
                    <Card.Title className="text-center">{note.title}</Card.Title>
                    {/* <div  className=" text-right">
              <button type="button" className="btn btn-outline-primary">Edit</button>
              <button type="button" className="btn btn-outline-danger">Delete</button>
            </div> */}
                    <Card.Text >{note.body.slice(0,300) + '.....'}</Card.Text>
                    <Card.Link href="/viewNote"><p className='text-center'>View note</p></Card.Link>
    
                </Card.Body>
            </Card>
        </ul>
    ));
    

    return (
        <div className="text-center">
            <h1  className="text-center"> Literature notes</h1>
      
            {noteListed}
        
        </div>
    );
}
