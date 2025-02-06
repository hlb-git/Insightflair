const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql2');
const csvParser = require('./helperFunctions/csvParser');
const bcrypt = require('bcrypt');


const upload = multer({
  dest: 'uploads/',
  limits: { filesize: 10 * 1024 * 1024 }
});

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const PORT = process.env.PORT || 5050;
const app = express();
app.options('*', cors());
app.use(cors(corsOptions));
app.use(express.json());

let db;
let hostMachine = process.env.DOCKER ? 'db' : 'localhost';

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: hostMachine,
    user: 'insightflair_user',
    password: 'insightflair_pwd',
    database: 'insightflair_db'
  });
}
db.connect((err) => {
  if (err) throw err;
  console.log("Connection to database is successful");
});

const csvTableQuery = `CREATE TABLE IF NOT EXISTS insightflair_data(
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
    console.log("Table 'insightflair_users' created or already exists.");
  }
});

const userTableQuery = `CREATE TABLE IF NOT EXISTS insightflair_users(
  email VARCHAR(40) PRIMARY KEY,
  password VARCHAR(20) NOT NULL,
  name VARCHAR(40) 
  )`;

db.query(userTableQuery, (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
  } else {
    console.log("Table 'insightflair_data' created or already exists.");
  }
});


const dbWriter = (row) => {
  return new Promise((resolve, reject) => {
    const { date, revenue, expenses, profit, customer_count } = row;
    const query = 'INSERT INTO insightflair_data (date, revenue, expenses, profit, customer_count) VALUES (?, ?, ?, ?, ?)';
    db.query(
      query, 
      [date, revenue, expenses, profit, customer_count],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
  });
};

app.post('/api/newuser', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Basic input validation
    if (!email || !password || !name) {
      return res.status(400).send('All fields are required');
    }

    // Check if user already exists
    const checkUserQuery = 'SELECT email FROM insightflair_users WHERE email = ?';
    db.query(checkUserQuery, [email], async (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (results.length > 0) {
        return res.status(409).send('Email already exists');
      }

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user into the database
      const insertQuery = `INSERT INTO insightflair_users 
                          (email, password, name) 
                          VALUES (?, ?, ?)`;
      db.query(insertQuery, [email, hashedPassword, name], (insertErr) => {
        if (insertErr) {
          console.error('Database insert error:', insertErr);
          return res.status(500).send('Error creating user');
        }
        res.status(200).send('New user created successfully');
      });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal Server Error');
  }
});
  
app.post('/api/getuser', (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT email, password 
                  FROM insightflair_users 
                  WHERE email = ?`;

    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).send('Internal Server Error');
      }

      if (results.length === 0) {
        return res.status(404).send('User not found');
      }

      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json({ email: user.email });
      } else {
        res.status(401).send('Incorrect password');
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal Server Error');
  }
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
    const query = "SELECT * FROM insightflair_data";
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


