const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const csvParser = require('./helperFunction/csvParser');


const PORT = 5050;
const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'agusto_user',
  password: 'agusto_pwd',
  database: 'agusto_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connection to database is successful");
});


const dbWriter = (row) => {
  return Promise((resolve, reject) => {
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



app.post('upload',upload.single('file'), async (req, res) => {
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






// app.get('/metrics', (req, res) => 


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
