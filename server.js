const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Love Calculator!');
});

// Other routes
app.post('/calculate-love', (req, res) => {
  const { name1, name2 } = req.body;
  // Love calculation logic
  const lovePercentage = Math.floor(Math.random() * 100) + 1;
  res.json({ name1, name2, lovePercentage });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
