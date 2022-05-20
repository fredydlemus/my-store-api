const express = require("express");
const UserService = require("../services/user.service");
const validatorHandler = require("../middlewares/validator.handler");
// const {
//   updateUserSchema,
//   createUserSchema,
//   getUserSchema,
// } = require("../schemas/user.schema");

const router = express.Router();
const service = new UserService();

router.get("/", async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
