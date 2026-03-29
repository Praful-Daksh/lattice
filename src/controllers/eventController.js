const db = require('../config/db');

const getEvents = async (req, res) => {
  try {
    const [events] = await db.query('SELECT * FROM events');
    return res.json(events);
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

    res.json({ id: result.insertId, message: 'Event created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getEvents,
    createEvent
}