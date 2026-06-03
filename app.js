//route , middle

import express from "express";
import router from "./routes/notes-route.js";
const app =  express();


app.use(express.json());
app.use('/api/notes', router);

app.get('/',(req,res)=>{
    res.send("Welcome to Notes API");
})







export {app}




