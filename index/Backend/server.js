const express = require('express');
const mysql = require('mysql2');//library that lets Node.js talk to MySQL
const cors = require('cors');//requests to your backend

const app = express();
app.use(cors());
app.use(express.json());

const link = mysql.createConnection({
  host: 'localhost',
  user: 'root',         //  MySQL username
  password: 'Jegelskerbrunost123@',  //  MySQL password
  database: 'Femnation'   // database name
});

link.connect();

app.get('/qna', (req, res) => {
  const question = req.query.q;

  link.query('SELECT Answer FROM QnA WHERE Questions = ?', [question], (err, result) => {
    if (result && result.length > 0) 
      {
      res.send(result[0].Answer);
      } 
    else 
      {
      res.send('ERROR you either typed nothing or there is no data for this question');
      }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});