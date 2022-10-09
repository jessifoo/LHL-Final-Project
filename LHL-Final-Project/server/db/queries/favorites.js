const db = require('../../configs/db.config');

const getFavoritedNotes = () => {
	return db.query("SELECT * FROM favourites;").then(data => {
		return data.rows;
	})
}

module.exports = {getFavoritedNotes}