const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT * FROM product OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

// function validateCreate(quote) {
//   let messages = [];

//   console.log(quote);

//   if (!quote) {
//     messages.push('No object is provided');
//   }

//   if (!quote.quote) {
//     messages.push('Quote is empty');
//   }

//   if (!quote.author) {
//     messages.push('Author is empty');
//   }

//   if (quote.quote && quote.quote.length > 255) {
//     messages.push('Quote cannot be longer than 255 characters');
//   }

//   if (quote.author && quote.author.length > 255) {
//     messages.push('Author name cannot be longer than 255 characters');
//   }

//   if (messages.length) {
//     let error = new Error(messages.join());
//     error.statusCode = 400;

//     throw error;
//   }
// }

async function create(product){
 // validateCreate(quote);

  const result = await db.query(
    'INSERT INTO products(name, description, price, inStock) VALUES ($1, $2, $3, $4) RETURNING *',
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
