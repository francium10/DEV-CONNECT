const express=require('express');
const connectDB=require('./config/database');
const app=express();
const User=require('./models/Users');


app.use(express.json());

app.post('/signup', async(req, res) => {
    try {
        // creating a new instance of a User model passed dynamically through req.body
        const user = new User(req.body);
        
        // saving the user to db and sending a response to frontend
        await user.save();
        res.send('user added successfully');
    } catch (error) {
        res.status(400).send('Error in saving user'+ error.message);
    }
});

app.get('/user',async(req,res)=>{
    try {
        const emailId=req.body.email
        const users= await User.find({email:emailId});
        if(users.length===0){
           res.status(404).send('user not found');
        }
        else{
            res.send(users);
        }
}   
    catch (error){
res.status(400).send('Error in getting user'+ error.message); 
} });

app.get('/feed',async(req,res)=>{
    try {
        const users= await User.find({});
        res.send(users);
    } 
    catch (error){
    res.status(400).send('Error in getting feed'+ error.message); 
    } });
 
app.delete('/user',async(req,res)=>{
try {
    const userId=req.body.userId
    const user= await User.findByIdAndDelete(userId);

} catch (error) {
    res.status(400).send('Could not delete user'+ error.message); 
}  
}) ;   

app.put('/user',async(req,res)=>{
try {
    const userId=req.body.userId;
    const user= await User.findByIdAndUpdate(userId);
    res.send('user updated successfully');
} catch (error) {
    res.status(400).send('Could not update user'+ error.message); 
}
})


connectDB()
.then(()=>{
console.log('db successfully connected');
app.listen(3000,()=>{
    console.log('app is running smoothly at port 3000')
    });  
})
.catch((err)=>{
console.log('failed to connect to db');
});
