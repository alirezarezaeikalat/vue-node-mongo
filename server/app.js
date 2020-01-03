const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// connect to database
mongoose.connect(
    "mongodb+srv://alireza:Alireza1372@cluster0-hvghg.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).catch(error => console.log(error));

mongoose.connection.once("open", () => {
  console.log("Connection has been made, now make fireworks...");
});


// Middleware
// this middleware is used to recognize the incoming object as a json
app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/posts');

app.use('/api/posts', posts);


const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(`Server is now running on port: ${port}`); 
});