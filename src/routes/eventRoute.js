const express = require('express');
const eventRouter = express.Router();

const { createEvent, getEvents, markAttendance } = require('../controllers/eventController.js');
const { createEventValidation } = require('../middlewares/eventValidation.js');



/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     responses:
 *       200:
 *         description: List of events
 */
eventRouter.get('/', getEvents);

/**
  * @swagger
  * /events:
  *   post:
  *     summary: Create a new event
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               title:
  *                 type: string
  *               description:
  *                 type: string
  *               date:
  *                 type: string
  *               total_capacity:
  *                 type: number
  *     responses:
  *       201:
  *         description: Event created
  */
eventRouter.post('/', createEventValidation, createEvent);

/**
 * @swagger
 * /events/{id}/attendance:
 *   post:
 *     summary: Validate booking using booking code
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               booking_code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Valid booking
 */
eventRouter.post('/:id/attendance', markAttendance);

module.exports = eventRouter;
