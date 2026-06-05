-- Create Employee Table
CREATE TABLE Employees (
    ID INT,
    Name VARCHAR(50),
    Department VARCHAR(50),
    Salary INT
);

-- Insert Data
INSERT INTO Employees VALUES
(1, 'Ali', 'IT', 50000),
(2, 'Ahmed', 'HR', 40000),
(3, 'Sara', 'IT', 60000),
(4, 'Ayesha', 'Finance', 55000);

-- Sum of Salaries
SELECT SUM(Salary) AS Total_Salary
FROM Employees;

-- Average Salary
SELECT AVG(Salary) AS Average_Salary
FROM Employees;

-- Count of Employees
SELECT COUNT(*) AS Total_Employees
FROM Employees;

-- Minimum Salary
SELECT MIN(Salary) AS Minimum_Salary
FROM Employees;

-- Maximum Salary
SELECT MAX(Salary) AS Maximum_Salary
FROM Employees;