const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce Product API',
      version: '1.0.0',
      description: 'API documentation for E-commerce product management',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'Product ID' },
            name: { type: 'string', description: 'Product name' },
            price: { type: 'number', format: 'float', description: 'Product price' },
            discount: { type: 'number', format: 'float', description: 'Discount amount' },
            review_count: { type: 'integer', description: 'Number of reviews' },
            image_url: { type: 'string', format: 'uri', description: 'Product image URL' },
            is_deleted: { type: 'integer', description: 'Deletion status (0=active, 1=deleted)' }
          },
        },
        ProductInput: {
          type: 'object',
          required: ['name', 'price'],
          properties: {
            name: { type: 'string', example: 'New Awesome T-Shirt' },
            price: { type: 'number', format: 'float', example: 499.00 },
            discount: { type: 'number', format: 'float', example: 50.00 },
            review_count: { type: 'integer', example: 0 },
            image_url: { type: 'string', format: 'uri', example: 'https://example.com/image.jpg' },
          },
        },
        ErrorResponse: {
            type: 'object',
            properties: {
                error: { type: 'string', example: 'Resource not found' }
            }
        },
        SuccessMessage: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Operation successful' },
          },
        },
      },
    },
  },
  // Path to the API docs files
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;