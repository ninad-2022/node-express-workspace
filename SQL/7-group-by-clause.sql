USE college;
SELECT * FROM student;

SELECT city, MAX(rollno)FROM student GROUP BY city;
SELECT city, name, MAX(rollno)FROM student GROUP BY city, name;

INSERT student(rolLno, name, marks,grade, city)
VALUE(107, "farha", 80, "B","Pune");

-- group by rollno by city and name
SELECT city, name, COUNT(rollno)FROM student GROUP BY city, name;

-- avg marks in delhi
SELECT city, AVG(marks), COUNT(rollno) FROM student GROUP BY city;

UPDATE student SET name="Chetan" WHERE rollno=107;

-- HAVING caluse
-- having clause works on the goup whereas where caluse works on the row
SELECT city, COUNT(rollno), marks FROM student GROUP BY rollno HAVING marks > 90;

-- order of execuation
SELECT city  FROM student WHERE grade="A" GROUP BY city HAVING MAX(marks)>93 ORDER BY city ASC;