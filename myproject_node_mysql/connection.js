
//mysql Connect

var api= require("./modules/batch/api");
var api= require("./modules/courses/api");
var api= require("./modules/students/api");

console.log("connection");

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database :  'nani'
  });

  connection.connect(function(error) {
    if (error) {
      console.log(error);
      return;
    }
  
    console.log('database connection created');
  });

  module.exports = connection;



 
//End mysql Connect

