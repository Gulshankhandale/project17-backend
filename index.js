const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const DBCon = require('./dbconfig');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT;

DBCon();


app.use(bodyParser.json());
app.use(cors());

app.use('/', userRoutes);


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})