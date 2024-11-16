const mongoose = require('mongoose');

const connectDB=async ()=>{
  await mongoose.connect(
    'mongodb+srv://Francis:Nosiku%402024@namastenode.dniko.mongodb.net/DevTinder'
)
};

module.exports=connectDB;