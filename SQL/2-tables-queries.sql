use college;
select * from college;

CREATE TABLE demo (
ID INT PRIMARY KEY,
NAME VARCHAR (60),
AGE INT NOT NULL
);

INSERT INTO student VALUES(2, "Ram", 45), (3, "Rahul", 34);


-- safe mode mysql OFF: SET SQl_SAFE_UPDATES=0; 
SET SQl_SAFE_UPDATES=0; 
UPDATE student SET grade="O" WHERE grade="A";
UPDATE student SET marks=86 WHERE rollno=105;

UPDATE student
SET grade = 
CASE
WHEN marks BETWEEN 90 AND 100 THEN "O"
WHEN marks BETWEEN 85 AND 90 THEN "A"
WHEN marks BETWEEN 80 AND 85 THEN "B"
WHEN marks BETWEEN 75 AND 80 THEN "C"
WHEN marks BETWEEN 70 AND 75 THEN "D"
ELSE "E"
END;

DELETE FROM student WHERE marks <= 30;
INSERT INTO student VALUES (107, "Naresh", 30, "E", "Kerla");

SELECT * FROM student;
-- ALTER: to change the table schema (ADD, RENAME, DROP, COLUMN)
ALTER TABLE student ADD COLUMN fees VARCHAR(40);
ALTER TABLE student RENAME COLUMN PAY TO fees; -- only rename column name not datatype
ALTER TABLE student CHANGE COLUMN fees pay INT; -- changes name & datatype as well 

-- add column with age and set default value 10 
ALTER TABLE student ADD COLUMN age INT NOT NULL DEFAULT 19;
-- modify data type into varchar
ALTER TABLE student MODIFY age VARCHAR(2);

INSERT INTO student VALUES(109, "piyush", 45, "E", "ramgad", 100); -- ERROR: data to long 
ALTER TABLE student CHANGE age student_age INT NOT NULL DEFAULT 19; -- change for avoiding above error

-- DROP vs TRUNCATE
-- TRUNCATE: it delete all the data in table
-- DROP: it deletes table directly






