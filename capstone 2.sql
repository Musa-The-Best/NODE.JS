CREATE DATABASE CustomerDB;
USE CustomerDB;
CREATE TABLE Customers (
    CustomerID INT,
    Name VARCHAR(20),
    Product VARCHAR(20),
    Country VARCHAR(20)
);
INSERT INTO Customers VALUES
(1, 'Z', 'Laptop', 'USA'),
(2, 'A', 'Phone', 'UK'),
(3, 'B', 'Tablet', 'Pakistan'),
(4, 'C', 'Laptop', 'India'),
(5, 'D', 'Phone', 'Antartica');
SELECT * FROM Customers;
SELECT * FROM Customers
WHERE Name LIKE 'A%';
SELECT * FROM Customers
WHERE Name LIKE '%or%';
SELECT DISTINCT Country
FROM Customers;
SELECT * FROM Customers
ORDER BY Name ASC;
SELECT * FROM Customers
ORDER BY Country ASC;