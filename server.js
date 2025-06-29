const express = require('express');
const app = express();

const port = 8000;

// Middleware to parse JSON
app.use(express.json());

// Basic Routes
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Modular Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// 404 Error Handler
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});