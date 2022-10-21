const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database/db');
const authRouter = require('./routes/auth');
const tourRouter = require('./routes/main');
const stripeRouter = require('./routes/stripe');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', tourRouter);
app.use('/', stripeRouter);

authRouter(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
