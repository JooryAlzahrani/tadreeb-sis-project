CREATE SCHEMA IF NOT EXISTS tadreeb_sis;
USE tadreeb_sis;

CREATE TABLE IF NOT EXISTS Users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    university VARCHAR(100),
    major VARCHAR(100),
    role ENUM('Admin','Student') NOT NULL
);

CREATE TABLE IF NOT EXISTS Admins (
    adminID INT PRIMARY KEY,
    FOREIGN KEY (adminID) REFERENCES Users(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Students (
    studentID INT PRIMARY KEY,
    FOREIGN KEY (studentID) REFERENCES Users(userID) ON DELETE CASCADE
    notificationsEnabled BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS StudentsInterests (
    studentID INT,
    interest VARCHAR(100),
    PRIMARY KEY (studentID, interest),
    FOREIGN KEY (studentID) REFERENCES Students(studentID) ON DELETE CASCADE
)

CREATE TABLE Notification (
    notificationID INT AUTO_INCREMENT PRIMARY KEY,
    studentID INT NOT NULL,
    message VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    type VARCHAR(50),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);

CREATE TABLE AlumniConnection (
    connectionID INT AUTO_INCREMENT PRIMARY KEY,
    studentID INT NOT NULL,
    alumniName VARCHAR(100) NOT NULL,
    company VARCHAR(100),
    contactInfo VARCHAR(150),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
);