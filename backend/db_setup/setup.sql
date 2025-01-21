CREATE DATABASE IF NOT EXISTS agusto_db;

USE agusto_db;

CREATE TABLE IF NOT EXISTS agusto_data(
  id INT AUTO_INCREMENT PRIMARY KEY,
  date VARCHAR(20) NOT NULL,
  revenue INT NOT NULL,
  expenses INT NOT NULL,
  customer_count INT NOT NULL, 
  profit INT NOT NULL
);


CREATE USER IF NOT EXISTS 'agusto_user'@'localhost' IDENTIFIED BY 'agusto_pwd';

GRANT ALL PRIVILEGES ON agusto_db.* TO 'agusto_user'@'localhost';
