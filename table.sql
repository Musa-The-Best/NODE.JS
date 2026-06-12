CREATE DATABASE musaDB;
USE musaDB;
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(30),
    Age INT,
    Grade VARCHAR(5),
    Marks INT
);
INSERT INTO Students VALUES
(1, 'RIZZ GOD', 14, '88', 85),
(2, 'Hashtag', 13, '82', 72),
(3, 'cliff hanger', 14, '832', 91),
(4, 'Ben dover', 13, '123456', 68),
(5, 'a', 14, '0', 88);
SELECT * FROM Students;
SELECT * FROM Students
WHERE Marks > 80;
SELECT * FROM Students
WHERE Grade = '8A';
SELECT * FROM Students
WHERE Age > 13;