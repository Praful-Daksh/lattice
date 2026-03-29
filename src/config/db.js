const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

pool.getConnection((error, connection) => {
    if (error) {
        console.error("Database couldn't connect: ", error.message);
    } else {
        console.log("Database connected successfully");
        connection.release();
    }
})
module.exports = pool.promise();