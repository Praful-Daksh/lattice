const express = require('express');
const userRouter = express.Router();

const { getUserBookings } = require('../controllers/userController.js');
/**
 * @swagger
 * /users/{id}/bookings:
 *   get:
 *     summary: Get all bookings made by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of bookings
 */
userRouter.get('/:id/bookings', getUserBookings);

module.exports = userRouter;
