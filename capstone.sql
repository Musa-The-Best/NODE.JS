-- Create Database
CREATE DATABASE CompanyDB;

-- Use Database
USE CompanyDB;

-- Create Employees Table
CREATE TABLE Employees (
    EmpID INT,
    Name VARCHAR(10),
    Department VARCHAR(20),
    Salary INT,
    City VARCHAR(20)
);

-- Insert Records
INSERT INTO Employees VALUES
(1, 'A', 'IT', 50000, 'Musa the goat'),
(2, 'B', 'HR', 40000, 'Musa town'),
(3, 'C', 'IT', 60000, 'Musa Land'),
(4, 'D', 'Finance', 55000, 'Musa man'),
(5, 'E', 'HR', 45000, 'Musa the best');

SELECT * FROM Employees;
SELECT * FROM Employees
WHERE Department = 'IT';
SELECT * FROM Employees
WHERE Salary > 50000;
SELECT * FROM Employees
ORDER BY Salary DESC;
SELECT Department,
       COUNT(*) AS TotalEmployees,
       AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department;
SELECT Department,
       AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department
HAVING AVG(Salary) > 45000;