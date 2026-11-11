
CREATE DATABASE studenthub;

USE studenthub;

CREATE TABLE announcements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    message VARCHAR(255)
);

INSERT INTO announcements (title, message)
VALUES
('Exam Update', 'Internal exams start next week'),
('Assignment', 'Submit assignments on time'),
('Lab Update', 'Complete your lab records');

SELECT * FROM announcements;
