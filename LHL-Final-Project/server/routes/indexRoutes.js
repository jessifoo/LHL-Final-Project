// routes that map to the same routes that are defined on the client side. deliniates how logic will be separated
// Front end needs to talk to the same routes as the back end

const router = require('express').Router();
const users = require('../db/queries/users');

router.get('/users', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

router.get('/register')


  
module.exports = router;