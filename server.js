// Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//any request goes to api/items/*
const items = require('./routes/api/items')


//Init express
const app = express(); 

// Allow origin *
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Bodyparser Middleware
app.use(express.json());

// DB Config. require keys file in conf folder/keys. want mongouri from
const db = require('./config/keys').mongoURI;

//Connect to Mongo. promise based. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise / https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
mongoose
 .connect(db)
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));
//note: need api to get requests from front end fetch items to db, post and delete

// Use Routes. any goes to api/items, refer to var items = require('./routes/api/items')
app.use('/api/items', items)


// variable to create port for the server. () is listen on that port
// const port = process.env.PORT || 5000;
 app.set('port', (process.env.PORT || 5000)); 
app.listen(port, () => console.log('Server started on port 5000'));
