const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');


const createBooking = async (req, res) => {
    const connection = await db.getConnection();
    try {
        const { user_id, event_id } = req.body;
        if(!user_id || !event_id){
            return res.status(400).json({
                message: "missing details, please fill all details."
            })
        }

        await connection.beginTransaction();

        const [events] = await connection.query(
            'SELECT * FROM events WHERE id = ? FOR UPDATE',
            [event_id]
        );
        if (events.length === 0) {
            throw new Error('Event not found');
        }

        const event = events[0];
        if (event.remaining_tickets <= 0) {
            throw new Error('No tickets available');
        }

        const [users] = await connection.query(
            'SELECT id FROM users WHERE id = ?',
            [user_id]
        );
        if (users.length === 0) {
            throw new Error('User not found');
        }

        const bookingCode = uuidv4();

        await connection.query(
            `insert into bookings(user_id,event_id,booking_code) values(?,?,?)`, [user_id, event_id, bookingCode]
        );

        await connection.query(
            `update events set remaining_tickets = remaining_tickets - 1 where id = ?`, [event_id]
        );

        await connection.commit();

        return res.status(201).json({
            message: "booking created sucessfully",
            bookingCode: bookingCode,
        })

    } catch (error) {
        await connection.rollback();
        return res.status(500).json({
            message: error.message,
        })
    } finally {
        await connection.release();
    }
}


module.exports = {
    createBooking
}