DROP TABLE IF EXISTS ratings CASCADE;
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  rating INTEGER,
  note_id INTEGER REFERENCES notes(id) ON DELETE CASCADE,
);