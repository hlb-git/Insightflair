CREATE DATABASE IF NOT EXISTS insightflair_db;

USE insightflair_db;

CREATE TABLE IF NOT EXISTS insightflair_data(
  id INT AUTO_INCREMENT PRIMARY KEY,
  date VARCHAR(20) NOT NULL,
  revenue INT NOT NULL,
  expenses INT NOT NULL,
  customer_count INT NOT NULL, 
  profit INT NOT NULL
);

CREATE TABLE IF NOT EXISTS insightflair_users(
  email VARCHAR(40) PRIMARY KEY,
  password VARCHAR(20) NOT NULL,
  name VARCHAR(40) 
  );

CREATE USER IF NOT EXISTS 'insightflair_user'@'localhost' IDENTIFIED BY 'insightflair_pwd';

GRANT ALL PRIVILEGES ON insightflair_db.* TO 'insightflair_user'@'localhost';
