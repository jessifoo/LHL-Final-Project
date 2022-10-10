const db = require('../../configs/db.config');


const getAllClasses = () => {
    return db.query('SELECT * FROM classes;').then(data => {
        return data.rows;
    });
};



module.exports = {getAllClasses};