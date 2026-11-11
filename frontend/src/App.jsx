
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const materials = [
    'Data Structures Notes',
    'Database Management Systems',
    'Operating Systems Notes',
    'Computer Networks Notes'
  ];

  const assignments = [
    'Complete Java Assignment',
    'Submit DBMS Record',
    'Prepare React Practical'
  ];

  const getAnnouncements = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/announcements'
      );
      setAnnouncements(response.data);
    } catch (error) {
      console.log('Error fetching announcements:', error);
    }
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  const addAnnouncement = async (e) => {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
      alert('Please enter title and message');
      return;
    }

    try {
      await axios.post('http://localhost:5000/announcements', {
        title,
        message
      });

      alert('Announcement added successfully!');
      setTitle('');
      setMessage('');
      getAnnouncements();
    } catch (error) {
      alert('Unable to add announcement');
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Student Hub</h1>
        <p>Your Learning, Your Success</p>
      </header>

      <main className="container">
        <h2>Welcome to Student Hub!</h2>
        <p>Manage your academic activities in one place.</p>

        <div className="cards">
          <section className="card">
            <h2>Study Materials</h2>
            {materials.map((item, index) => (
              <p key={index}>📚 {item}</p>
            ))}
          </section>

          <section className="card">
            <h2>Assignments</h2>
            {assignments.map((item, index) => (
              <p key={index}>📝 {item}</p>
            ))}
          </section>

          <section className="card">
            <h2>Announcements</h2>
            {announcements.map((item) => (
              <p key={item.id}>
                <strong>{item.title}</strong>
                <br />
                {item.message}
              </p>
            ))}
          </section>
        </div>

        <section className="card form-card">
          <h2>Add New Announcement</h2>

          <form onSubmit={addAnnouncement}>
            <input
              type="text"
              placeholder="Enter announcement title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Enter announcement message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Add Announcement</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Student Hub | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
