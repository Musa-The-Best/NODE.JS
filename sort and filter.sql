CREATE TABLE HackerNews (
    NewsID INT,
    Category VARCHAR(20),
    Author VARCHAR(20),
    Views INT
);
INSERT INTO HackerNews VALUES
(1, 'Technology', 'Ali', 500),
(2, 'Technology', 'a', 700),
(3, 'Science', 'b', 300),
(4, 'Science', 'c', 450),
(5, 'Gaming', 'd', 200),
(6, 'Gaming', 'Z', 350),
(7, 'Technology', 'F', 600);
SELECT * FROM HackerNews;
SELECT
    Category,
    COUNT(*) AS TotalStories,
    SUM(Views) AS TotalViews,
    AVG(Views) AS AverageViews
FROM HackerNews
GROUP BY Category
HAVING SUM(Views) > 500
ORDER BY TotalViews DESC;