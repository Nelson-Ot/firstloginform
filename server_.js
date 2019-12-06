const express = require ('express');
const app = express();
app.listen(8080);
var usrname = usrname;
var password = password;
app.get('/login.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "login.html" ); 
    app.get("/login" ,function(req,res){


        if(usrname ==`${usrname}` && password ==`${password}`){
            res.send("Congrats")
        }else{

            res.send("Please check your Username or Password!")
        }
    });

});

app.get('/register.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "registor.html" ); 
});

app.get("/" ,function(req,res){

    res.sendFile(__dirname + "/" + "register.html");

    app.get("/registration" ,function(req,res){

        let fname = req.query.Firstname;
        let lname = req.query.Lastname;
        let gender = req.query.Gender;
        let County = req.query.country;
        let Courses = req.query.Course;

        let email = req.query.Email;
        usrname = req.query.Username;
        password = req.query.Password;


        res.send(`Firstname : ${fname}
Last Name : ${lname}
Gender : ${gender}
Country : ${County}
Courses : ${Courses}
Username : ${usrname}
Email : ${email}
Password : ${password}`);



    });

});

