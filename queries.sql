CREATE TABLE posts (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    body VARCHAR(255) NOT NULL,
    create_at DATE NOT NULL
);