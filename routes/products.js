const express = require('express');
const router = express.Router();
const products = require('../services/products');

/* GET products */
router.get('/products', async function(req, res, next) {
  try {
    res.json(await products.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting product `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* GET a product */
router.get('/products/:id', async function(req, res, next) {
  const {id} = req.params;
  try {
    res.json(await products.getOne(id));
  } catch (err) {
    console.error(`Error while posting product `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST a product */
router.post('/products', async function(req, res, next) {
  try {
    res.json(await products.create(req.body));
  } catch (err) {
    console.error(`Error while posting product `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
