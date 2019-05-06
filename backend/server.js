const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/yori-kitchen', { useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

//allows for us to use body parser to get req data
app.use(express.urlencoded({ extended: false}));

// create cors variable and enable cross origin resource sharing
const corsOptions = {
  origin: 'http://127.0.0.1:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.get('/', (req, res) => {
   res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


