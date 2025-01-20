const csv = require('csv-parser');
const fs = require('fs');


const csvParser = (filePath) => {
  return Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', (err) => reject(err));
  });
};


module.exports = csvParser; 
