const express = require("express");
const faker = require("community-faker");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello my server in express");
});

app.get("/new-route", (req, res) => {
  res.send("New route");
});

app.get("/products", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.image(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) =>{
    res.send('filter');
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Product 1",
    price: 1000,
  });
});



app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("limit and offset are required");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
