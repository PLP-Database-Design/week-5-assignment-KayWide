const express = require('express')
const app = express()


// Question 1 goes here
app.get('/patients', (req, res) => {
  const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while retrieving patients');
      return;
    }
    res.json(results);
  });
});

// Question 2 goes here
app.get('/providers', (req, res) => {
  const query = 'SELECT first_name, last_name, provider_specialty FROM providers';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while retrieving providers');
      return;
    }
    res.json(results);
  });
});


// Question 3 goes here
app.get('/patients/filter', (req, res) => {
  const { first_name } = req.query;
  const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
  
  db.query(query, [first_name], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while filtering patients');
      return;
    }
    res.json(results);
  });
});

// Question 4 goes here
app.get('/providers/filter', (req, res) => {
  const { specialty } = req.query;
  const query = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';
  
  db.query(query, [specialty], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while filtering providers');
      return;
    }
    res.json(results);
  });
});

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})