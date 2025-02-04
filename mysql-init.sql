CREATE USER IF NOT EXISTS 'insightflair_user'@'%' IDENTIFIED BY 'insightflair_pwd';
GRANT ALL PRIVILEGES ON insightflair_db.* TO 'insightflair_user'@'%';
FLUSH PRIVILEGES;
