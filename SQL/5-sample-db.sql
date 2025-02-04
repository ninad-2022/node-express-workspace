CREATE DATABASE college;
USE college;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(255),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO student VALUES
(101, "anil", 78, "C", "Pune"),
(102, "Bhumika", 93, "A", "Mumbai"),
(103, "chetan", 85, "b", "Mumbai"),
(104, "dhruv", 96, "A", "Delhi"),
(105, "emanuel", 12, "F", "Delhi"),
(106, "farha", 82, "B", "Delhi");

SELECT * FROM student;
SELECT DISTINCT city FROM student;
SELECT * FROM student WHERE marks + 10 > 100;

SELECT * FROM student WHERE marks BETWEEN 10 AND 80;
SELECT * FROM student WHERE marks NOT BETWEEN 10 AND 80;

SELECT * FROM student WHERE city IN("Pune","Mumbai");
SELECT * FROM student WHERE city NOT IN("Pune");

SELECT * FROM student WHERE marks > 75 LIMIT 3;

SELECT * FROM student WHERE city="Delhi" ORDER BY marks ASC;
SELECT * FROM student ORDER BY marks DESC LIMIT 3;








