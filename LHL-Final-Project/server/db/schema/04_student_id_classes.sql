DROP TABLE IF EXISTS student_id_class CASCADE;
CREATE TABLE student_id_class (
  student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES class(id) ON DELETE CASCADE,
);
