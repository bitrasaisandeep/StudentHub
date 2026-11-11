
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Student Hub Backend Running');
});

// Get announcements
app.get('/announcements', (req, res) => {
    db.query('SELECT * FROM announcements', (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
});

// Add announcement
app.post('/announcements', (req, res) => {
    const { title, message } = req.body;

    if (!title || !message) {
        return res.status(400).json({
            message: 'Title and message are required'
        });
    }

    db.query(
        'INSERT INTO announcements (title, message) VALUES (?, ?)',
        [title, message],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: 'Announcement added successfully' });
        }
    );
});

// Start server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
