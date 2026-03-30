const db = require("../config/db.js");

const getUserBookings = async (req, res) => {
    const user_id = req.params.id;
    try {
        const [bookings] = await db.query(`SELECT * FROM bookings WHERE user_id = ?`, [user_id])
        return res.json(bookings);
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        })
    }
}

module.exports = {
    getUserBookings
}