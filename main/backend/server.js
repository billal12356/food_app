import express from 'express';
const app = express();
import dotenv, { config } from "dotenv";
dotenv.config()


const PORT = process.env.PORT || 8001
app.listen(5001,()=>{
    console.log(`server raning with port:${PORT}`)
})