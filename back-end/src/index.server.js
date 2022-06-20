const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// routes
const userRoutes = require('./routes/user');



//environment variable or you can say constants
env.config();

// mongodb connection string 
// mongodb+srv://<username>:<password>@cluster0.nu4vl.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.nu4vl.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`).then(()=>{
    console.log("Database connected")
});
// mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.nu4vl.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
// {userNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
//     console.log("Database connected")
// });


// app.use(express.json());
app.use(bodyParser());
app.use('/api', userRoutes) 
// // Api 
// app.get('/', ( req,res, next)=>{
//     res.status(200).json({
//         message: "Hello from Server"
//     });
//     });
    
//     app.post('/data', ( req,res, next)=>{
//     res.status(200).json({
//         message: req.body
//     });
//     });

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})