var express= require("express");
var app = express();
console.log("my users api");

app.use("/users/", require("./users/api"));
module.exports=app;