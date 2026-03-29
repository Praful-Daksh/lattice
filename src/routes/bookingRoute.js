const express = require('express');
const bookingRouter = express.Router();

const { createBooking } = require('../controllers/bookingController.js');

bookingRouter.post('/', createBooking);

module.exports = bookingRouter;