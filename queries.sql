-- Creates new database
CREATE DATABASE blog_db;

-- Use the blog_db database
USE blog_db;

-- Create a new table named posts
CREATE TABLE posts (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    body VARCHAR(255) NOT NULL,
    create_at DATE NOT NULL
);

-- Add new post into the database
INSERT INTO posts (title, body, create_at)
VALUES ("Our first post", "This is our first post. We are just testing with this.", "2024-10-26")
VALUES ("Our second post", "This is our second post. We are just testing with this.", "2024-10-26");