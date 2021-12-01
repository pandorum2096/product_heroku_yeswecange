const db = require('./db');
const helper = require('../helper');
const config = require('../config');

//GET ALL products
async function getMultiple() {
  const rows = await db.query('SELECT * FROM product');
  const data = helper.emptyOrRows(rows);
  return {data}
}

//GET a product
async function getOne(id) {
  const rows = await db.query("SELECT * FROM product WHERE id=$1", [id]);
  const data = { product: rows[0]};

  if (!rows) {
    return [];
  }else{
    return {data}
  }
 
}

//POST a product
async function create(product){

  const result = await db.query(
    'INSERT INTO product(name, description, price, inStock) VALUES ($1, $2, $3, $4) RETURNING *',
    [product.name, product.description, product.price, product.inStock]
  );
  let message = 'Error in creating product';

  if (result.length) {
    message = 'product created successfully';
  }
  return {message};
}


//DELETE a product
async function deleteOne(id) {
  const rows = await db.query("DELETE FROM Product WHERE id=$1", [id]);
  return { message: 'Deleted!' };
}


module.exports = {
  getMultiple,
  getOne,
  create,
  deleteOne
}
