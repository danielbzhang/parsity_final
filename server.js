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

const PORT = process.env.PORT || 8000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
