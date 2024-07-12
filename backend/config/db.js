require('dotenv').config()
const mongoose = require('mongoose')
const DB = process.env.MONGO_URL

const connectDB = async() =>{
    try{
        await mongoose
        .connect(DB)
        .then(() => {
            console.log("connected to MongoDB");
        })
        .catch((error) => {
            console.error("error connecting to MongoDB:", error.message);
        });
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB