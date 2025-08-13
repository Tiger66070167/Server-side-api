const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const product = {
    // Get all products
    getAllProducts: (callback) => {
        const query = 'SELECT * FROM products WHERE is_deleted = 0';
        db.query(query, callback);

    },
    // Get product by ID
    getProductsById: (id, callback) => {
        const query = 'SELECT * FROM products WHERE id = ? AND is_deleted = 0';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0] || {});
        });
    },
    // Search product by keyword
    getProductsByKeyword: (keyword, callback) => {
        const query = 'SELECT * FROM products WHERE name LIKE ? AND is_deleted = 0';
        const searchKeyword = `%${keyword}%`;
        db.query(query, [searchKeyword], callback);
    },
    // Create product
    createProduct: (productData, callback) => {
        const { name, price, discount, review_count, image_url } = productData;
        const query = 'INSERT INTO products (name, price, discount, review_count, image_url) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [name, price, discount, review_count, image_url], (err, result) => {
            if (err) return callback(err);
            callback(null, { id: result.insertId, message: 'Product created' });
        });
    },
    // Update product
    updateProduct: (id, productData, callback) => {
        const { name, price, discount, review_count, image_url } = productData;
        const query = 'UPDATE products SET name = ?, price = ?, discount = ?, review_count = ?, image_url = ? WHERE id = ?';
        db.query(query, [name, price, discount, review_count, image_url, id], (err) => {
            if (err) return callback(err);
            callback(null, { message: 'Product updated' });
        });
    },
    // Soft delete product
    softDeleteProduct: (id, callback) => {
        const query = 'UPDATE products SET is_deleted = 1 WHERE id = ?';
        db.query(query, [id], (err) => {
            if (err) return callback(err);
            callback(null, { message: 'Product soft deleted' });
        });
    },
    // Restore product
    restoreProduct: (id, callback) => {
        const query = 'UPDATE products SET is_deleted = 0 WHERE id = ?';
        db.query(query, [id], (err) => {
            if (err) return callback(err);
            callback(null, { message: 'Product restored' });
        });
    }
}
module.exports = product;
