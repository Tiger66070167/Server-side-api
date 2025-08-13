const express = require('express');
const dotenv = require('dotenv');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();
const PORT = 3000;
dotenv.config();

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');
const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rote Welllllcommmm!!!!!
app.get('/', (req, res) => {
  res.send('Welcome! View products page at /products. API is at /api/products. Docs are at /api-docs.');
});

// Rote Main i guess
app.use('/products', productRoutes);


// Start server
app.listen(PORT, () => {
  console.log('✅ Node app is running...');
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`📚 API documentation is available at http://localhost:${PORT}/api-docs`);
});