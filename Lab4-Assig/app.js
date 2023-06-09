// --------------------------------Question 1------------------------------  //

// var express=require("express");
// var app=express();

// app.use(express.static('assets'));

// app.get("/",function(request,response){
//     response.send("<html><head><link rel='stylesheet' type='text/css' href='/Style.css'></head><body><h1>Welcome</h1></body></html>");
// })

// app.get("/Login",function(request,response){
//     response.send("<html><head><link rel='stylesheet' type='text/css' href='/Style.css'></head><body><form><div><label for='Email1'>Email address</label><input type='email' id='Email1'></div><div><label for='password'>Password</label><input type='password' id='password'></div><div><input type='checkbox' id='Check1'><label for='exampleCheck1'>Check me out</label></div><button type='submit'>Submit</button></form></body></html>");
// })

// app.get("/Signup",function(request,response){
//     response.send("<html><head><link rel='stylesheet' type='text/css' href='/Style.css'></head><body><form><div><label for='Name'>Name</label><input type='text' id='Name'></div><div><label for='Email1'>Email address</label><input type='email' id='Email1'></div><div><label for='password'>Password</label><input type='password' id='password'></div><button type='submit'>Submit</button></form></body></html>");
// })

// app.get("/Profile",function(request,response){
//     response.send("<html><head><link rel='stylesheet' type='text/css' href='/Style.css'></head><body><img src='https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' alt='...'><h5>Mohamed Ali</h5><p>MohamedAli@gmail.com</p></body></html>");
// })

// app.get("*",function(request,response){
//     response.send("<html><head><link rel='stylesheet' type='text/css' href='/Style.css'></head><body><p><b>404.</b><br><ins>That’s an error.</ins></p><p>The requested URLwas not found on this server.<br><ins>That’s all we know.</ins></p></body></html>");
// })

// app.listen(3000);


// --------------------------------Question 2------------------------------  //

const express = require('express');
const fs = require("fs");
var bcrypt = require('bcrypt');

const app = express();


/** Decode Form URL Encoded data */
app.use(express.urlencoded());

const file = fs.readFileSync('Users.json')


/** Show page with a form */
app.get('/Signup', (req, res, next) => {
    res.send(`<head>
    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
    </head>
    <body>
    <form method="POST" action="/Signup">
  <input type="text" name="username" placeholder="username">
  <br>
  <input type="email" name="email" placeholder="email">
  <br>
  <input type="password" name="password" placeholder="password">
  <br>
  <input type="submit">
</form>
</body>`);
});


// const user = [];

/** Process POST request */
app.post('/Signup', function (req, res, next) {

    // read the JSON file as string
    const jsonData = fs.readFileSync('Users.json');

    // parse JSON string
    const data = JSON.parse(jsonData);

    // add new data to the array
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    var searchData = jsonData.includes(newUser.email)
    console.log(searchData)
    if (searchData) {
        console.log("Email exists");
        res.send(`<head>
        <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
        </head>
        <body>
        <h1>Email is already exist</h1>
        </body>`);
    }
    else {
        console.log("wrong")
        data.push(newUser);
        res.send(`<head>
        <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
        </head>
        <body>
        <h1>${newUser.username}</h1>
        <h3>${newUser.email}</h3>
        <h3>${newUser.password}</h3>
        </body>`);
    }
});

app.get('/Login', (req, res, next) => {
    res.send(`<head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data:; img-src 'self' data: *; font-src 'self' data: fonts.gstatic.com">    
    </head>
    <body>
    <form method="POST" action="/Login">
    <input type="email" name="email" placeholder="email">
    <br>
    <input type="password" name="password" placeholder="password">
    <br>
    <input type="submit">
</form>
</body>`);
});

/** Process POST request */
app.post('/Login', function (req, res, next) {
    // // read the JSON file as string
    // const jsonData = fs.readFileSync('Users.json');

    // // parse JSON string
    // const data = JSON.parse(jsonData);

    // // add new data to the array
    // const newUser = {
    // // username: req.body.username,
    // email: req.body.email,
    // password: req.body.password,
    // };

    // // var searchData=jsonData.includes(newUser.email&&newUser.password)
    // // console.log(searchData)
    // if(jsonData.includes(newUser.email&&newUser.password)==true){
    //     console.log("Login Success");
    //     res.send(`<head>
    //     <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
    //     </head>
    //     <body>
    //     <h1>${jsonData.find(user=>user.email==newUser.email).username}</h1>
    //     <h3>${newUser.email}</h3>
    //     <h3>${newUser.password}</h3>
    //     </body>`);
    // }
    // else if(jsonData.includes(newUser.email)==false){
    //     console.log("wrong email")
    //     res.send(`<head>
    //     <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
    //     </head>
    //     <body>
    //     <h1>You Entered Wrong Email</h1>
    //     </body>`);
    // }

    // try {
    //     // Get user input
    //     const { email, password } = req.body;
    //     console.log(email)
    //     console.log(password)
    //     // Validate user input
    //     if (!(email && password)) {
    //         res.sendsend("All input is required");
    //     }
    //     // Validate if user exist in our database

    //     const jsonData = fs.readFileSync('Users.json');

    //     const user = jsonData.find(u => u);
    //     console.log(password)
    //     console.log(req.body.password)
    //     console.log(user && (bcrypt.compare(password, req.body.password)))

    //     if (user && (bcrypt.compare(password, req.body.password))) {
    //         // user
    //         res.send(`<head>
    //            <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com">
    //            </head>
    //            <body>
    //            <h1>${jsonData.find(u => u.email == user.email).username}</h1>
    //            <h3>${user.email}</h3>
    //            <h3>${user.password}</h3>
    //            </body>`);
    //     }
    //     else {
    //         res.send("Invalid Credentials");
    //     }
    // } catch (err) {
    //     console.log(err);
    // }
});


/** Run the app */
app.listen(3000);