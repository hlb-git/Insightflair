CREATE USER IF NOT EXISTS 'agusto_user'@'%' IDENTIFIED BY 'agusto_pwd';
GRANT ALL PRIVILEGES ON agusto_db.* TO 'agusto_user'@'%';
FLUSH PRIVILEGES;
