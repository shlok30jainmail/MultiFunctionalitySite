require('dotenv').config();
const express = require("express");
require("./db/conn");
const path = require("path");
const ejs = require("ejs");
const bcrypt = require("bcryptjs");
const cookie = require("cookie-parser");
const Register =require("./models/register");
const Contact =require("./models/contact");

const auth = require("./middleware/auth");


const app = express();
app.use(cookie());
app.use(express.urlencoded({extended:false}));// for getting form data

const port = process.env.PORT || 5000 ;

//  Creating a static path
const Mainpath = path.join(__dirname,"../publical");

// Set view engine 
app.set("view engine", "ejs");

// use static pages
app.use(express.static(Mainpath));


// creating route for home page
app.get("/",auth,(req, resp)=>{
    resp.render("index");
})

// Creating route for contact form
app.get("/contact", (req, resp)=>{
    resp.render("contact");
})

// Creating route for Text-editor
app.get("/text-editor", (req, resp)=>{
    resp.render("text-editor");
})

// Creating route for noteTaken app
app.get("/noteTaken", (req, resp)=>{
    resp.render("noteTaken");
})


// Creating route for weather app
app.get("/weather", (req, resp)=>{
    resp.render("weather");
})

// Creating route for calculator app
app.get("/cal", (req, resp)=>{
    resp.render("cal");
})
// Creating route for alarm app
app.get("/alarm", (req, resp)=>{
    resp.render("alarm");
})

// Creating route for snake game
app.get("/snake", (req, resp)=>{
    resp.render("snake");
})

// Creating route for quize game
app.get("/quize", (req, resp)=>{
    resp.render("quize");
})

// Creating route for Num guessing game
app.get("/NumGuess", (req, resp)=>{
    resp.render("NumGuess");
})

// Creating route for Tic Tak Toe game
app.get("/TicToe", (req, resp)=>{
    resp.render("TicToe");
})
// Creating route for login
// app.get("/login", (req, resp)=>{
//     resp.render("login");
// })


// Creating route for registeration
app.get("/register", (req, resp)=>{
    resp.render("register");
})

// Creating route for textutils app
app.get("/textutils", (req, resp)=>{
    resp.render("textutils");
})

app.post("/register",async(req,resp)=>{
    // resp.send("hi i am shlok")
    try {
       const  password= req.body.password;
       const confirmpassword = req.body.confirmpassword;
       if(password === confirmpassword){
        const user = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            // gender:req.body.gender,
            phone:req.body.phone,
            password:password,
            confirmpassword:confirmpassword
            
        })
        console.log("success" + user);
        const token = await user.generateAuthToken();// here user is instance of Register model
        console.log("the part of "+ token)


        // add cookie (jt token add in cookies)
        resp.cookie("jwt", token, {
            expires: new Date(Date.now()+100000000),
            httpOnly:true // we not change in cookies using client site
        });
        console.log(cookie);


        const data = await user.save();
        resp.status(201).render("index");
        // resp.status(200).render("index")
        // console.log(data);

       }else{
        resp.status(500).json("Password are matching")
       }
       
        // console.log(req.body.firstname);
        // resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
        console.log(error)
    }
});


// for login forms
app.get("/login",(req,resp)=>{
    // resp.send("hi i am shlok")
    resp.render("login")
});
app.post("/login",async(req,resp)=>{
    try {
        const email = req.body.email;
    const password = req.body.password;
    const match = await Register.findOne({email:email});
    // bcrypt ke ange yadi await use na kaare too bhi yah work karta hai per proper rule me await use kare it's best.
    const isMatch = await bcrypt.compare(password, match.password);

    // token generate
    const token = await match.generateAuthToken();// here match is instance of Register model
        console.log("the part of "+ token)


         // add cookie (jt token add in cookies)
         resp.cookie("jwt", token, {
            expires: new Date(Date.now()+100000),
            httpOnly:true ,// we not change in cookies using client site
            // secure:true

        });


        // matching user password
    if(isMatch){
        resp.status(201).render("index");

    }
    else {
        resp.send("invalid email");
    }
        
    } catch (error) {
     resp.status(500).json("invalid login details");
    }
    // resp.send("hi i am shlok")
    
    // resp.send("successful");
    // console.log(match)
});


// Contact posting method
app.post("/contact",async(req,resp)=>{
    // resp.send("hi i am shlok")
    try {
      
        const user = new Contact({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            // gender:req.body.gender,
            phone:req.body.phone,
            message:req.body.message,
            rating:req.body.rating
            
        })
       


        const data = await user.save();
        resp.status(201).render("index");
       
    } catch (error) {
        resp.status(500).json(error);
        console.log(error)
    }
});

app.listen(port, ()=>{
    console.log(`App is listening ${port}`);
})