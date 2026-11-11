# Student Hub 🎓

## About the Project
Student Hub is a web-based platform designed to help college students access academic information in one place. It provides a simple interface for viewing study materials, assignments, and important announcements.

## Features
- Student Dashboard
- View Study Materials
- View Assignments
- View College Announcements
- Add New Announcements
- Store announcements in a MySQL database

## Technologies Used
- **Frontend:** React.js, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **API Communication:** Axios

## Project Structure
```text
StudentHub/
├── backend/
│   ├── db.js
│   ├── server.js
│   └── package.json
├── database/
│   └── studenthub.sql
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── .gitignore
```

## Installation and Setup

### 1. Clone the repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd StudentHub
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
DB_PASSWORD=your_mysql_password
```

Start the backend:
```bash
node server.js
```

### 3. Setup Frontend

Open another terminal:
```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Database Setup
1. Open MySQL.
2. Execute the SQL file located at `database/studenthub.sql`.
3. Ensure your MySQL credentials are configured in `backend/.env`.

## Developed By
**Name:** Sai Sandeep B  
**College:** PSCMR  
**Department:** Computer Science and Engineering  
**Roll Number:** 24KT1A0524

## Project Purpose
To provide students with a centralized platform for accessing academic resources and sharing important college announcements.