import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error('DB connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// ====== Routes ======

// Signup
app.post('/signup', (req, res) => {
  const { name, email, role, password } = req.body;

  if (!name || !email || !role || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, role, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: err.message });
    }
    res.json({ message: 'Signup successful', userId: result.insertId });
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });

    if (results.length > 0) {
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

// Test route
app.get('/', (req, res) => {
  res.send('Node.js backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
