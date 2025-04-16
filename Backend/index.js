const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');


app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));