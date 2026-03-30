const db = require('../config/db');

const getEvents = async (req, res) => {
  try {
    const [events] = await db.query('SELECT * FROM events');
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const { title, description, date, total_capacity } = req.body;

    const [result] = await db.query(
      `INSERT INTO events (title, description, date, total_capacity, remaining_tickets)
       VALUES (?, ?, ?, ?, ?)`,
      [title, description, date, total_capacity, total_capacity]
    );

    return res.status(201).json({ id: result.insertId, message: 'Event created' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const markAttendance = async (req, res) => {
  try {
    const eventId = req.params.id;
    const { booking_code } = req.body;

    if (!booking_code) {
      return res.status(400).json({
        message: "Booking Code is required"
      });
    }

    const [rows] = await db.query(
      'select * from bookings where booking_code = ?',
      [booking_code]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Invalid booking code"
      });
    }

    const booking = rows[0];

    if (booking.event_id != eventId) {
      return res.status(400).json({
        message: "Booking does not belong to this event"
      });
    }

    return res.status(200).json({
      message: "Valid booking",
      booking
    });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getEvents,
  createEvent,
  markAttendance
}