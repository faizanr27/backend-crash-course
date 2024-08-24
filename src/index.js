//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

// import mongoose from 'mongoose';
// import {DB_NAME} from './constants';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()



// import express from "express";
// const app = express();

// ( async () => {
//     try{
//        mongo db connection
//        await mongoose.connect(`${process.env.
//         MONGODB_URI}/${DB_NAME}`)

// for express error if it cant talk
//         app.on("error", (error) => { 
//             console.log("ERRR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listenig on port ${process.env.PORT}`)
//         })

//     }
//   mongo db connection error
//     catch (error){
//         console.log("ERROR: ", error);
//         throw err
//     }
// })()

// function connectDB() {}

// connectDB()