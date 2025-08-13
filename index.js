const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Import and use product routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Root test
app.get('/', (req, res) => {
  res.send('hi');
});

// Start server
app.listen(PORT, () => {
  console.log('✅ Node app is running...');
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});