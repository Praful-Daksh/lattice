-- Create Database
CREATE DATABASE IF NOT EXISTS event_booking;
USE event_booking;

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- EVENTS TABLE
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATETIME NOT NULL,
    total_capacity INT NOT NULL,
    remaining_tickets INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    booking_code VARCHAR(100) NOT NULL UNIQUE,
    booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_event
        FOREIGN KEY (event_id) REFERENCES events(id)
        ON DELETE CASCADE
);

-- EVENT ATTENDANCE TABLE
CREATE TABLE IF NOT EXISTS event_attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    event_id INT NOT NULL UNIQUE,
    entry_time DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_att_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_att_event
        FOREIGN KEY (event_id) REFERENCES events(id)
        ON DELETE CASCADE
);

-- INDEXES 
CREATE INDEX idx_user_bookings ON bookings(user_id);
CREATE INDEX idx_event_bookings ON bookings(event_id);
CREATE INDEX idx_event_attendance ON event_attendance(event_id);