DROP TABLE ratings;

ALTER TABLE notes
ADD COLUMN rating INTEGER;

UPDATE notes
SET (rating) = (5)
WHERE id = 1;

UPDATE notes
SET (rating) = (4)
WHERE id = 2;

UPDATE notes
SET (rating) = (3)
WHERE id = 3;