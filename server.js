const express = require ('express');
const app = express();
app.listen(8080);
const mysql= require('mysql')
const con=mysql.createConnection({
   host: "localhost",
    user: "root",
    password: "root",
    database: "Nelsito"
    
});
con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

var usrname = usrname;
var password = password;
app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "login.html" ); 
});

app.get('/reg_form', function (req, res) {  
    res.sendFile( __dirname + "/" + "registor.html" ); 
});

app.get('/login', function (req, res) {  
    res.sendFile( __dirname + "/" + "workspace.html" ); 
});

app.get("/registration" ,function(req,res){

        let firstname = req.query.fname;
        let lastname = req.query.lname;
        let gender = req.query.gender;
        let Country = req.query.Country;
        let Courses = req.query.Courses;

        let email = req.query.email;
        username = req.query.usrname;
        password = req.query.password;

   con.query(`INSERT INTO regist (firstname,lastname,gender,Country,Courses,email,username,password) VALUES ('
    ${firstname}', '${lastname}', '${gender}', '${Country}', '${Courses}', '${email}', '${username}', '${password}')`,(err,rows,fields)=>{
    if (!err)
      console.log(rows);
    else
      console.log(err);
   });
res.redirect('/');

    });

app.get('/view', function (req, res) {
   con.query(`SELECT * FROM regist `,(err,rows,fields)=>{
    if (!err){
      console.log(rows);
      res.send(rows);
    }
    else
      console.log(err);
   });
});

app.get('/select', function (req, res) {
   con.query(`SELECT firstname,lastname FROM regist `,(err,rows,fields)=>{
    if (!err){
      console.log(rows);
      res.send(rows);
    }
    else
      console.log(err);
   });
});

    app.get('/login', function (req, res) {  
    res.sendFile( __dirname + "/" + "workspace.html" ); 
});



