DROP TABLE IF EXISTS student_id_class CASCADE;
CREATE TABLE student_id_class (
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
);
