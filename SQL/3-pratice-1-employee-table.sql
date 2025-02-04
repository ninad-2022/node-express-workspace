CREATE DATABASE quolam_employees;
USE quolam_employees;

CREATE TABLE employees (
id INT PRIMARY KEY,
name VARCHAR(255),
salary INT NOT NULL
);
DROP TABLE employees;
INSERT INTO employees VALUES(1, "adam", 25000),(2, "bob", 30000), (3, "casey", 40000);
SELECT * FROM employees;
