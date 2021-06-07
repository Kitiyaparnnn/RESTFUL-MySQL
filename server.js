// CREATE TABLE users(
//     id int(11) NOT NULL PRIMARY key AUTO_INCREMENT,
//     state varchar(100) NOT NULL,
//     name varchar(100) NOT NULL,
//     address varchar(100) NOT NULL,
//     picture longblob NOT NULL,
//     package int NOT NULL
//     )ENGINE=INNODB DEFAULT CHARSET=utf8;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//homepage route
app.get("/", (req, res) => {
  return res.send({ error: false, massage: "Welcome girl" });
});

//connection to mysql database
const dbCon = mysql.createConnection({
  host: "localhost",
  port:5000,
  user: "root",
  password: "",
  database: "nodejs-api",
});
dbCon.connect();

//retrieve all users
app.get('/users',(req,res) => {
    dbCon.query('SELECT * FROM users',(err,result,fields) => {
        if(err) throw err;

        const message =''
        if(result === undefined || result.length == 0){
            massage = 'Users table is empty.'
        }else {
            massage = 'Successfully retrieve all users.'
        }
        return res.send({err: false,users: result,message: message})
    })
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

module.exports = app;
