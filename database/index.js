const mysql = require('mysql2');
const login = require('./login.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: login.user,
  password: login.password,
  database: 'ourHouse',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySql');
  }
});

module.exports = connection;
