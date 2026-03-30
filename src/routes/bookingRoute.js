const express = require('express');
const bookingRouter = express.Router();

const { createBooking } = require('../controllers/bookingController.js');

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Book a ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: number
 *               event_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Booking successful
 */
bookingRouter.post('/', createBooking);

module.exports = bookingRouter;