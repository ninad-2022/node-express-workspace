USE college;
SELECT * FROM student;

-- Q1. avg marks in each city in ascending order?
SELECT city, AVG(marks) FROM student GROUP BY city ORDER BY AVG(marks) ASC;

-- Q.1.1 select studnet on the basis of grade?
SELECT grade, COUNT(rollno) FROM student GROUP BY grade ORDER BY grade;

-- Q2. for the given table, find total payment according to each payment method?
CREATE TABLE payment(
customer_id INT PRIMARY KEY,
customer VARCHAR(255), 
mode VARCHAR(60),
city VARCHAR(100)
);

SELECT * FROM payment;

SELECT mode, COUNT(customer_id) FROM payment GROUP BY mode;

INSERT INTO payment(customer_id, customer, mode, city)
VALUES
  (101, 'Olivia Barrett', 'Netbanking', 'Portland'),
  (102, 'Ethan Sinclair', 'Credit Card', 'Miami'),
  (103, 'Maya Hernandez', 'Credit Card', 'Seattle'),
  (104, 'Liam Donovan', 'Netbanking', 'Denver'),
  (105, 'Sophia Nguyen', 'Credit Card', 'india'),
  (106, 'Caleb Foster', 'Debit Card', 'New Orleans'),
  (107, 'Ava Patel', 'Debit Card', 'Minneapolis'),
  (108, 'Jackson Brooks', 'Credit Card', 'Phoenix'),
  (109, 'Lucas Carter', 'Netbanking', 'Boston'),
  (110, 'Isabella Martinez', 'Credit Card', 'Nashville');