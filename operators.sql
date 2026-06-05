-- Create Customer Table
CREATE TABLE Customers (
    CustomerID INT,
    CustomerName VARCHAR(50),
    City VARCHAR(50),
    Grade INT
);

-- Insert Data
INSERT INTO Customers VALUES
(1, 'Ali', 'New York', 120),
(2, 'Ahmed', 'Chicago', 90),
(3, 'Sara', 'New York', 80),
(4, 'Ayesha', 'Boston', 150),
(5, 'Hassan', 'New York', 130);

-- Customers who belong to New York
SELECT * FROM Customers
WHERE City = 'New York';

-- Customers with grade above 100
SELECT * FROM Customers
WHERE Grade > 100;

-- Customers who belong to New York OR have grade above 100
SELECT * FROM Customers
WHERE City = 'New York' OR Grade > 100;

-- Customers who belong to New York AND have grade above 100
SELECT * FROM Customers
WHERE City = 'New York' AND Grade > 100;