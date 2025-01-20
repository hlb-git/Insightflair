const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const fs = require('fs');
const csv = require('csv-parser');
const bodyParser = require('body-parser');


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


app.post('upload', (req, res) => {
  



// app.get('/metrics', (req, res) => 


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});
