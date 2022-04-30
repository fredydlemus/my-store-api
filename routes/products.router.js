const express = require("express");
const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("filter");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch("/:id", async (req, res) => {
  try{
    const body = req.body;
  const { id } = req.params;
  const product = await service.update(id, body);
  res.json(product);
  }catch(e){
    res.status(404).json({
      message: e.message,
    });
  }
  
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

module.exports = router;
