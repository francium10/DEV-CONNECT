const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
        'mongodb+srv://@namastenode.dniko.mongodb.net/testDatabase'
    );
}
module.exports=connectDB;