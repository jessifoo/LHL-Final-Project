import React from 'react';
import { useContext } from 'react';
import { noteContext } from 'providers/NoteProvider';
import './Notes.css';
import Card from 'react-bootstrap/Card';
import '../App.css';

// eslint-disable-next-line no-unused-vars
export default function ViewNote (props) {

    const {allNotes} = useContext(noteContext);

    const noteList = allNotes.filter((note) => note.id === 1);


    const noteListed = noteList.map((note, i) => (
      
        <ul key={i}>
    
    
            <Card border="dark" key={i} style={{ width: '70rem', height: '40rem'} } href="/addNotes" >
                <Card.Body>
                    <Card.Title className="text-center">{note.title}</Card.Title>
                    <Card.Text  style={{fontsize:80}}>{note.body}</Card.Text>
                </Card.Body>
                <div className="text-right">
                    <button type="button" className="btn btn-outline-primary">Edit</button>
                    <button type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </Card>
        </ul>
    ));
    

    return (
        <div className='div1 text-center'>
            <h1  className='text-center'> </h1>
        
            {noteListed}
        
        </div>
    );
}
