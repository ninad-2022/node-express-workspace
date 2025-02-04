USE quolam_employees;
SELECT * FROM employees;

CREATE TABLE constraints (
id INT UNIQUE,
name VARCHAR(255),
age INT NOT NULL,
city VARCHAR(20),
PRIMARY KEY(id, name)
);

ALTER TABLE constraints ADD bonous INT DEFAULT 20000;
ALTER TABLE constraints ADD incentive INT CHECK(incentive < 1000);


INSERT INTO constraints VALUES (1, "Ram", 12, "indapur"),(2, "Ramesh", 13, "Meghalya"),(3, "krishna", 10, "perularam");

-- insert into individual column because of default value contraint 
INSERT INTO constraints(id, name, age, city) VALUES (5, "Ambo", 28, "mumbai");

INSERT INTO constraints(id, name, age, city, incentive) VALUES (6, "Amar", 30, "kurla", 12000);

SELECT * FROM constraints;