const db = require("../config/db.js");

const getBookings = async (req, res) => {
    const eventId = req.params.id;
    try {
        const [bookings] = await db.query(`SELECT * FROM bookings WHERE event_id = ?`, [eventId])
        return res.json(bookings);
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        })
    }
}

module.exports = {
    getBookings
}