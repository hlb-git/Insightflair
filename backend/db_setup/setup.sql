CREATE DATABASE IF NOT EXISTS agusto_db;

USE agusto_db;

CREATE TABLE IF NOT EXISTS agusto_data(
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  revenue DECIMAL(10, 2) NOT NULL,
  expenses DECIMAL(10, 2) NOT NULL,
  customer_count INT NOT NULL, 
  profit DECIMAL(10, 2) NOT NULL
);


CREATE USER 'agusto_user'@'localhost' IDENTIFIED BY 'agusto_pwd';

GRANT ALL PRIVILEGES ON agusto_db.* TO 'agusto_user'@'localhost';
