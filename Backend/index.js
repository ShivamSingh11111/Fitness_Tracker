const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Fitness Tracker Backend is running...');
});

// =================== NEW ROUTE ===================
// Dummy POST route for workout data
app.post('/api/workout', (req, res) => {
    const workoutData = req.body;
    console.log('Received workout data:', workoutData);

    // Aage jaake yahan SQL se save karenge
    res.status(200).json({ message: 'Workout data received successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
