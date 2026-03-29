const express = require('express');
const userRouter = express.Router();

const { getBookings } = require('../controllers/userController.js');

userRouter.get('/:id/bookings', getBookings);

module.exports = userRouter;
