const express = require('express');
const router = express.Router();

router.post('/',bookingValidation,createBooking);

module.exports = router;
