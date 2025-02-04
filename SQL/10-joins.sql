SELECT * FROM student;

CREATE TABLE course(
id INT PRIMARY KEY,
course VARCHAR(50)
);

INSERT INTO course VALUES (102,"English"),(103, "Math"), (104, "Science"), (105, "Computer Science");
SELECT * FROM course;
-- INEER JOIN:
SELECT * FROM student s INNER JOIN course c ON s.rollno = c.id;

-- LEFT JOIN:
SELECT * FROM student s LEFT JOIN course c ON s.rollno = c.id;

-- RIGHT JOIN:
SELECT * FROM student s RIGHT JOIN course c ON s.rollno = c.id;

-- FULL JOIN: not use in MYSQL but used in MSSQL SERVER. So, here we are using union.
-- UNION avoids duplicate values
SELECT * FROM student s LEFT JOIN course c ON s.rollno = c.id
UNION
SELECT * FROM student s RIGHT JOIN course c ON s.rollno = c.id;

-- LEFT EXCLUSIVE JOIN: rows which does not match 
SELECT * FROM student s LEFT JOIN course c ON s.rollno = c.id IS NULL;

-- RIGHT EXCLUSIVE JOIN: rows which does not match
SELECT * FROM student s RIGHT JOIN course c ON s.rollno = c.id IS NULL;

-- FULL EXCLUSIVE JOINl: both table rows
SELECT * FROM student s LEFT JOIN course c ON s.rollno = c.id IS NULL
UNION
SELECT * FROM student s RIGHT JOIN course c ON s.rollno = c.id IS NULL;

-- SELFT JOIN: join a table with itself
-- CASE: takign manager of the employee from the same table.
SELECT a.name, b.name AS manager_name FROM employees a JOIN employees b ON a.id = b.manager_id;
