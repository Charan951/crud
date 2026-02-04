const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();




const name=process.env.last_name;
console.log(`Name from env file is ${name}`);
const port= process.env.port;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}   
)

