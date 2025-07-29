const express = require('express');
const app = express();
const proverbsRoutes = require('./routes/proverbs');
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/proverbs', proverbsRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Afghan Proverbs & Sayings API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
