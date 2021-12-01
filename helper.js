function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return { products: rows};
}

function oneOrRows(rows) {
  if (!rows) {
    return [];
  }
  return { products: rows};
}


module.exports = {
  getOffset,
  emptyOrRows,
  oneOrRows
}
