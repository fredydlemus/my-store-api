const express = require("express");
const faker = require("community-faker");

const router = express.Router();

router.get("/", (req, res) => {
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

router.get("/filter", (req, res) => {
  res.send("filter");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: "Product not found",
    });
  } else {
    res.status(200).json({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.image(),
    });
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Product created",
    data: body,
  });
});

router.patch("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: "Product updated",
    data: body,
    id,
  });
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: "Product updated",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Product deleted",
    id,
  });
});

module.exports = router;
