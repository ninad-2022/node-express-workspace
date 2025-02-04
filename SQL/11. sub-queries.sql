USE college;
SELECT * FROM student;

-- TYPE 1: USING WHERE
SELECT name, marks FROM student WHERE marks > (SELECT AVG(marks) FROM student);
SELECT name, rollno FROM student WHERE rollno % 2 = 0;

-- TYPE 2: using FROM. must have alias 
SELECT MAX(marks) FROM (SELECT * FROM student WHERE city="Delhi") AS temp;

-- TYPE 3: using SELECT. Cannot return multiple rows.
SELECT (SELECT MAX(marks) FROM student), name FROM student;