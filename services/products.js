const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  //const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT * FROM product'
  );
  const data = helper.emptyOrRows(rows);
  //const meta = {page};

  return {data}
}


async function create(product){
 // validateCreate(quote);

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

module.exports = {
  getMultiple,
  create
}
