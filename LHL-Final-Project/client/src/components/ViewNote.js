import React from 'react';
import { useContext } from 'react';
import { noteContext } from 'providers/NoteProvider';
import './Notes.css'
import Card from 'react-bootstrap/Card';
import '../App.css';

export default function ViewNote (props) {

  const {allNotes} = useContext(noteContext);

  const noteList = allNotes.filter((note) => note.id === 1)


  const noteListed = noteList.map((note, i) => (
      
<ul>
    
    
        <Card border="dark" key={i} style={{ width: '70rem', height: '40rem'} } href="/addNotes" >
          <Card.Body>
            <Card.Title className="text-center">{note.title}</Card.Title>
            <Card.Text  style={{fontsize:80}}>{note.body}</Card.Text>
          </Card.Body>
            <div class=" text-right">
              <button type="button" class="btn btn-outline-primary">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div>
        </Card>
        </ul>
    ))
    

    return (
      <div align="center" className='div1'>
        <h1 text align= "center"> </h1>
        
          {noteListed}
        
      </div>
    );
  }
