USE college;
CREATE TABLE department(
id INT PRIMARY KEY,
NAME VARCHAR(50)
);

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(50),
dept_id INT,
FOREIGN KEY(dept_id) REFERENCES department(id)
ON DELETE CASCADE
ON UPDATE CASCADE
);

SELECT * FROM department;
INSERT INTO department VALUES(101, "Science"),(102, "English"),(103, "Marathi");
UPDATE department SET name="MECH" where id=101;

SELECT * FROM teacher;
INSERT INTO teacher VALUES(1, "Hema", 101),(2, "Rani",102),(3, "Shilpa", 103), (4, "Mendis", 103);
DELETE FROM teacher;