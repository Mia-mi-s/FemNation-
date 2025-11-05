const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         //  MySQL username
  password: 'Jegelskerbrunost123@',  //  MySQL password
  database: 'FemNationBot'   // database name
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});
app.listen(3000, () => console.log('Server running on port 3000'));
