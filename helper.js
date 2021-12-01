function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return { products: rows};
}

function emptyOrOneRows(rows) {
  if (!rows) {
    return [];
  }
  return { product: product.rows[0] };
}

module.exports = {
  getOffset,
  emptyOrRows,
  emptyOrOneRows
}
