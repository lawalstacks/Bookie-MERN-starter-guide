require("dotenv").config();
const cors = require("cors");
const express = require('express');
const connectDB = require('./connectDB');

const app  = express();
const PORT = process.env.PORT || 8000;

//middleware
connectDB();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
	res.json('hello lawalstacks.js!');
});

app.get('*',(req,res)=>{
        res.sendStatus('404');
});

app.listen(PORT,() =>{
	console.log(`server is runnjng on port: ${PORT}`);
}
);
