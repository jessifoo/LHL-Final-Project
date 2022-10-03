// routes that map to the same routes that are defined on the client side. deliniates how logic will be separated
// Front end needs to talk to the same routes as the back end

const router = require('express').Router();
const users = require('../db/queries/users');
const notes = require('../db/queries/notes');

router.get('/users', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

router.get('/notes', (req, res) => {
  notes.getAllNotes().then(data => {
    console.log(data);
    res.json({notes: data});
  })
});

router.get('/notes/:id', (req, res) => {
  notes.getNotesForUser(req.params).then(data => {
    console.log(data);
    res.json({userNotes: data});
  })
});


  
module.exports = router;