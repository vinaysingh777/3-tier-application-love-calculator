const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Result = require('./db'); // Import the Result model

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

mongoose.connect('mongodb://mongo:27017/lovecalculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/api/saveResult', async (req, res) => {
    try {
        const { name1, name2, score } = req.body;
        const result = new Result({ name1, name2, score });
        await result.save();
        res.status(200).json({ message: 'Result saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save result', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
