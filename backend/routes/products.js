const Router = require('express').Router;

const router = Router();

const db = require('../db'); // Import the database connection module

const products = []; 

// Get list of products products
router.get('/', async (req, res, next) => {

  try {
    const dbInstance = db.getDb();
    const productsCollection = dbInstance.collection('products');
    const result = await productsCollection.find().toArray();

    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error on retrieve all products' });
  }
});


// Get single product
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

// Add new product
// Requires logged in user
router.post('', async (req, res) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price, 
    image: req.body.image
  };

  const dbInstance = db.getDb();
  const productsCollection = dbInstance.collection('products');
  try {
    const result = await productsCollection.insertOne(newProduct);
    console.log(result);
    console.log('Product inserted');
    res.status(201).json({ message: 'Product added', productId: result.insertedId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Inserting product failed!' });
  }
});
      
// Edit existing product
// Requires logged in user
router.patch('/:id', (req, res, next) => {
  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    image: req.body.image
  };
  console.log(updatedProduct);
  res.status(200).json({ message: 'Product updated', productId: 'DUMMY' });
});

// Delete a product
// Requires logged in user
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'Product deleted' });
});

module.exports = router;
