CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR  NOT NULL,
    price INTEGER NOT NULL,
    inStock BOOLEAN  NOT NULL
);

INSERT INTO product (id, name, description, price, inStock) VALUES 
(1, 'coca', 'boisson', 200, 1), 
(2, 'pepsi', 'boisson', 250, 0);
