# Event Management API

This is a Node.js backend application for managing events and bookings.
It allows users to create events, book tickets, and validate attendance.


## Features

* Create and view events
* Book tickets for events
* Prevent overbooking using database transactions
* View user bookings
* Validate attendance using booking code
* Swagger API documentation


## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd project-folder
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=event_booking
PORT=3000
```

---

### 4. Setup Database

Run the SQL file provided:

```
database.sql
```

This will:

* Create tables
* Insert sample data

---

### 5. Run the server

```bash
npm run dev
```

---

##  API Documentation

Swagger UI available at:

```
http://localhost:3000/api-docs
```

-Import the provided Postman collection file to test APIs.
