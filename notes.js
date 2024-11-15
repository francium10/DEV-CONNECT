// const express = require('express')
// const app=express();
// app.listen(3000,()=>{
//   console.log('server is running successfully')
// });

const { Router } = require("express")


// Above is how we run a basic server that listens to request from frontend using express/node
// const express = require('express')
// const app=express();

// app.use('/Profile',(req,res)=>{
// res.send('Hello Profile')
// })  

// app.use('/Test',(req,res)=>{
//   res.send('Testing mic')
// })  
//   ///routes and route extensions work based on order if you put Test before Test/, both will respond with 
//   //results for Test because Routes handle anything that comes after the slash but if we swap them then 
//   // we will get for each individual route results 

// app.use('/Test/1',(req,res)=>{
// res.send('mic mic mic')
// })

// app.use('/',(req,res)=>{
//   res.send('Hello root')  
//   //The order of the routes/Endpoints matters. if the first Endpoint/route is "/" root the other routes won't run
//   //but when we move it below the other two, Test and the Profile runs.  
// })
  
// app.listen(3000,()=>{
//   console.log('server is running successfully')
// });

// Best way to make API calls test for GET,POST,UPDATE,and DELETE is through the use of POSTMAN 
// New workspace and new collection.
// when we do GET call/request  we want to get a user profile/data from the database 
// When we do a POST method, send our information for our database to store
// instead of using use("/",(req,res)=>{ 
  // })  which will matches all the http method to profile/ both get and post
  // we instead use get for getting 

  // GET REQUEST---get USER from database
  //  app.get("/user",()=>{
  //   res.send({fullname:"Francis Lufwendo", country:"Zambia",Organisation:"ESAWAS"})
  //  })
  
  // POST REQUEST---add USER to database
  // app.post("/user",()=>{
  // console.log('save data to the database')
  //   res.send("data successfully saved to the database");
  //  });

  // DELETE REQUEST--remove user from the database
  // app.delete ("/user",()=>{
  // res.send("data successfully saved to the database");
  // });

  // ADVANCED ROUTING TECHNIQUES
  // Don't ever forget order of route matters 
  // because everything that comes after a / works

  //  app.get("/ab?c",()=>{
  //   res.send({fullname:"Francis Lufwendo", country:"Zambia",Organisation:"ESAWAS"})
  //  })
// ("/ab?c) Question mark on b means it is optional this means if we make a get request doing 3000/abc even ac
//  will also work
// ("/ab+c") add as many bs as possible in 
// ("/ab*cd") This means anything i write between ab and cd will work in request.
// ("/a(bc?)") means bc is optional
// ("/a/) anything that includes A


// Connecting to database 
// download mongoose
// const mongoose = require('mongoose');
// const connectDB=async ()=>{
//   await mongoose.connect(
//     'mongodb+srv://Francis:Nosiku%402024@namastenode.dniko.mongodb.net/ESAWAS-DB'
// );
// };
// connectDB()
// .then(()=>{
//    console.log('database connection succeeded !')
// })
// .catch(err => console.log('failed to run'));

// Always make sure database runs first before the app/server on port 3000;l
// You do this by calling the function in main app 
// const connectDB= require('./config/database');

// and playing  application.listen just after success message for database is displayed
// const express = require('express')
// const connectDB=require('./config/database');
// const app=express();

// connectDB()
// .then(()=>{
//     console.log('database connection succeeded !')
//     app.listen(3000,()=>{
//     console.log('server is running successfully at port 3001');
//     });
// })
// .catch(err => console.log('failed to run'));

// in database.js just do module.exports=connectDB;