const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql2');
const csvParser = require('./helperFunctions/csvParser');


const upload = multer({
  dest: 'uploads/',
  limits: { filesize: 10 * 1024 * 1024 }
});

const PORT = process.env.PORT || 5050;
const app = express();
app.options('*', cors());
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'db',
  user: 'agusto_user',
  password: 'agusto_pwd',
  database: 'agusto_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connection to database is successful");
});

const csvTableQuery = `CREATE TABLE IF NOT EXISTS agusto_data(
  id INT AUTO_INCREMENT PRIMARY KEY,
  date VARCHAR(20) NOT NULL,
  revenue INT NOT NULL,
  expenses INT NOT NULL,
  customer_count INT NOT NULL,
  profit INT NOT NULL
)`;


db.query(csvTableQuery, (err, results) => {
  if (err) {
    console.error("Error executing Users query:", err);
  } else {
    console.log("Table 'agusto_users' created or already exists.");
  }
});

const userTableQuery = `CREATE TABLE IF NOT EXISTS agusto_users(
  email VARCHAR(40) PRIMARY KEY,
  password VARCHAR(20) NOT NULL,
  name VARCHAR(40) 
  )`;

db.query(userTableQuery, (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
  } else {
    console.log("Table 'agusto_data' created or already exists.");
  }
});


const dbWriter = (row) => {
  return new Promise((resolve, reject) => {
    const { date, revenue, expenses, profit, customer_count } = row;
    const query = 'INSERT INTO agusto_data (date, revenue, expenses, profit, customer_count) VALUES (?, ?, ?, ?, ?)';
    db.query(
      query, 
      [date, revenue, expenses, profit, customer_count],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
  });
};

app.post('/api/newuser', (req, res) => {
  try{
    const {email, password, name} = req.body;
    const query = 'INSERT INTO agusto_users (email, password, name) VALUES(?, ?, ?)';
    db.query(
      query,
      [email, password, name], (err, results) => {
        if (err) {
          res.status(500).send('Error creating user')
        } else {
        res.send('New user created successfully')
        }
      });
  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating user')
  };
});
  
app.post('/api/getuser', (req, res) => {
  const {email, password} = req.body;
  const query = 'SELECT email, password FROM agusto_users WHERE email = ?'; 
  db.query(query, [email], (err, results) => {
    if (err ) {
      console.log('Error: User not found');
      res.status(404).send('User not found');
    } else {
      if (password === results[0].password) { 
        res.json(results);
      }
    };
  });
});

app.post('/api/upload', upload.single('file'), async (req, res) => {
  const filePath = req.file.path;
  
  try {
    const rows = await csvParser(filePath);
    await Promise.all(rows.map(dbWriter));
    fs.unlinkSync(filePath);
    res.send('File uploaded and processed successfully')
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing the uploaded file');
  }
});


app.get('/api/metrics', (req, res) => {
  try {
    const query = "SELECT * FROM agusto_data";
    db.query(query, (err, results) => {
      if (err) {
        console.log('Error fetching data from database');
        res.status(500).send('Error retrieving metrics from db');
      } else {
        res.json(results);
      }
    });
    } catch (err) {
      console.error('Unexpected error:', err);
      res.status(500).send('Error:', err);
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});


