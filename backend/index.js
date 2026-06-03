const express = require('express');
const dotenv=require('dotenv');
dotenv.config();


const app = express();


const port = process.env.port || 6000;

const name=process.env.name;
const address=process.env.address;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/charan', (req, res) => {
    res.send('Hello charan!');
});

console.log(`Name: ${name}`);
console.log(`Address: ${address}`);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}   );





