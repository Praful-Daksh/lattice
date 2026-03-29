const express = require('express');
const eventRouter = express.Router();

const {createEvent,getEvents} = require('../controllers/eventController.js');
const {createEventValidation} = require('../middlewares/eventValidation.js');

eventRouter.get('/',getEvents);
eventRouter.post('/',createEventValidation,createEvent);
// eventRouter.post('/:id/attendance',attendanceValidation,getAttendance);

module.exports = eventRouter;
