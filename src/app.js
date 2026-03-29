const express = require('express');
const cors = require('cors');
const db = require('./config/db.js');
const eventRouter = require('./routes/eventRoute.js');
const userRouter = require('./routes/userRoute.js');
const bookingRouter = require('./routes/bookingRoute.js');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/events', eventRouter);
app.use('/users', userRouter);
app.use('/bookings', bookingRouter);


module.exports = app;