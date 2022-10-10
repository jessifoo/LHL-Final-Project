// db/queries/notes.js
const db = require('../../configs/db.config');

// Query to get all notes in the database 
const getAllNotes = () => {
    return db.query('SELECT * FROM notes;').then(data => {
        return data.rows;
    });
};

// Query to get the notes made by a particular user 
const getNotesForUser = userId => {
    return db.query('SELECT * FROM notes WHERE user_id = $1;', [userId]).then(data => {
        return data.rows;
    });
};
// Query to add a new note
const addNotes = ({title, body, user_id, class_id, semester_id }) => {
    return db.query(`INSERT INTO notes (id,title, body, picture, publishDate, user_id, class_id, semester_id)
	VALUES(DEFAULT,$1, $2, '', current_timestamp,$3, $4, $5)
	RETURNING *;
	`, [title,body,user_id, class_id, semester_id])
        .then(data => {
            console.log('DATA:',data.rows);
            return data.rows[0];
        })
        .catch(err => {
            console.log(err);
        });
	
};

// Query to delete a note
// eslint-disable-next-line no-unused-vars
const deleteNote = (noteId, userId=1)=> {
    return db.query('DELETE FROM notes WHERE id = $1', [noteId]);
};

// Query to get notes by class Id they belong in

// const findNotesByClassName =


module.exports = {getAllNotes, getNotesForUser, addNotes, deleteNote};