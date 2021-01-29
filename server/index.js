const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database');

app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('./userId')

app.get('/homeUsers/:home_id', function (req, res) {
  const homeId = req.params.home_id;

  const sql = `SELECT * FROM users WHERE homeId = ?`;

  db.query(sql, homeId, (err, data) => {
    if (err) {
      console.log('Error fetching home user information', err);
      res.send(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/homeName/:home_id', function (req, res) {

  const homeId = req.params.home_id;

  const sql = `SELECT homeName FROM homes WHERE id = ?`;

  db.query(sql, homeId, (err, data) => {
    if (err) {
      console.log('Error fetching home user information', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});

app.get('/user/:user_id', function (req, res) {

  const userId = req.params.user_id;

  const sql = `SELECT * FROM users WHERE id = ?`;

  db.query(sql, userId, (err, data) => {
    if (err) {
      console.log('Error fetching user information', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
});


app.post('/user', function (req, res) {

  const user = [req.body.firstName, req.body.lastName, req.body.username, req.body,password, req.body.homeId, req.body.userAvatar];

  const sql = `INSERT INTO users (firstName, lastName, username, password, homeId, currentStatus, userAvatar) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, user, (err, data) => {
    if (err) {
      console.log('Error inputting user information', err);
      res.send(500);
    } else {
      res.send(201);
    }
  })
});

app.put('/user/:id/:status', function (req, res) {

  const sql = `UPDATE users SET currentStatus = '${req.params.status}' WHERE id = ${req.params.id}`;

  db.query(sql, (err) => {
    if (err) {
      console.log('error updating current status', err);
      res.send(500);
    } else {
      res.send(201);
    }
  })

})

// INSERT INTO users (firstName, lastName, username, password, homeId, currentStatus, userAvatar) VALUES ('Marissa', 'Romero', 'marissa.romero', 'password1', 1, 'status1', 'https://imgur.com/ThGbe71')

// INSERT INTO homes (homeName) VALUES ('The Bungalow')

// INSERT INTO users (firstName, lastName, username, password, homeId, currentStatus, userAvatar) VALUES ('Dad', 'Romero', 'dad.romero', 'password3', 1, 'status4', 'https://imgur.com/farpWGC');

// UPDATE users SET currentStatus = 'status4' WHERE id = 3

app.listen(8080, function() {
  console.log('listening on port 8080!');
});
