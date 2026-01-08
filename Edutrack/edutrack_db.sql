-- Create the database
CREATE DATABASE EduTrackDB;

-- Use the database
USE EduTrackDB;

-- Create a table for users (teachers/students)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL
);

-- Insert demo users
INSERT INTO users (username, password, role) VALUES 
('teacher', '1234', 'Teacher'),
('student', '1234', 'Student');

-- Create a table for student records
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    grade INT NOT NULL,
    attendance VARCHAR(10) NOT NULL
);
