const express = require('express')
const connectDB=require('./config/database');
const app=express();


connectDB()
.then(()=>{
    console.log('database connection succeeded !')

    app.listen(3000,()=>{
      console.log('server is running successfully at port 3001');
    });
})

.catch(err => console.log('failed to run'));


