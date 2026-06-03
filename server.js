//server.js   dB connection and server setup


import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/index.js";
import {app} from "./app.js";

dotenv.config();

dbConnect();


const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});





