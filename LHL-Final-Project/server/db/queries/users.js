// db/queries/users.js
const db = require('../../configs/db.config');

const getAllUsers = () => {
    return db.query('SELECT * FROM users;').then(data => {
        return data.rows;
    });
};

const getUserById = id => {
    return db.query('SELECT * FROM users WHERE id = $1;', [id]).then(data => {
        return data.rows;
    });
};

const addUser = (user) => {
    return db.query(`INSERT INTO users (firstName, lastName, email, password, phoneNumber)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`, [user.firstName, user.lastName, user.email, user.password, user.phoneNumber])
        .then(data => {
            return data.rows;
        });
};

const getUserByEmail = (email) => {
    return db.query('SELECT * FROM users WHERE email = $1;', [email])
        .then(data => {
            return data.rows[0];
        });
};

module.exports = {getAllUsers, getUserById, addUser, getUserByEmail};