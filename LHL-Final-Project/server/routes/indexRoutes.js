// routes that map to the same routes that are defined on the client side. deliniates how logic will be separated
// Front end needs to talk to the same routes as the back end

const router = require('express').Router();
const users = require('../db/queries/users');
const notes = require('../db/queries/notes');
const ratings = require('../db/queries/ratings')

router.get('/users', (req, res) => {
  users.getAllUsers().then(data => {
    res.json({users: data});
  })
});

router.get('/users/:id', (req, res) => {
  users.getUserById(req.params.id).then(data => {
    res.json({userData: data});
  })
});


router.get('/notes', (req, res) => {
  notes.getAllNotes().then(data => {
    res.json({notes: data});
  })
});

router.get('/notes/:id', (req, res) => {
  notes.getNotesForUser(req.params.id).then(data => {
    res.json({userNotes: data});
  })
});



router.get('/ratings/:id', (req, res) => {
  ratings.getRatingsForNote(req.params.id).then(data => {
    res.json({noteRating: data});
  })
});


router.post('/notes', (req, res) => {
  console.log("posting test")
  console.log(req.body)
   notes.addNotes(req.body).then(data => {
    res.json({note: data})
   })
});

router.post('/notes/delete/:id', (req, res) => {
  console.log("deleting test")
  console.log(req.params.id)
  notes.deleteNote(req.params.id).then(data => {
    res.json({deletedNote: data})
  })
});

module.exports = router;