const express = require('express');
const connectDB=require('./config/database');
const { model } = require('mongoose');
const app=express();
const User=require("./models/user");

app.post("/signup",async (req,res)=>{

const user=new User(
  {
  firstName:"John",
  lastName:"DOe",
  email:"John@gmail.com",
  password:"Abc123",
  organization:"NWSCO",
  country:"Zambia"
}
);
await user.save()
res.send('user added successfully !');

});


connectDB()
.then(()=>{
    console.log('database connection succeeded !')

    app.listen(3000,()=>{
      console.log('server is running successfully at port 3001');
    });
})

.catch(err => console.log('failed to run'));


