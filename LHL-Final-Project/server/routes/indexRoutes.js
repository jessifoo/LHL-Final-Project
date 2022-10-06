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
  console.log("REQ.ID: ", req.params.id)
  users.getUserById(req.params.id).then(data => {
    console.log("USER DATA: ", data)
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

// login route
router.post('/api/login', (req, res) => {
  console.log("REQ: ", req.body)
  users.getUserByEmail(req.body.email)
  .then(data => {
    console.log("USER: ", data)
    if (req.body.password === data.password) {
      res.json({success: true})
    } else {
      res.json({success: false})
    }
  })
});





// router.route("/login").get(async (req, res) => {
//   if (req.session.user && req.session.user.email) {
//     res.json({ loggedIn: true, username: req.session.user.username });
//   } else {
//     res.json({ logedIn: false });
//   }
// })

// router.post(async (req, res) => {
//   if (getUserByEmail.rowCount > 0) {
//     const isSamePass = await bcrypt.compare(
//       req.body.password,
//     )
//   }
// })
  
module.exports = router;