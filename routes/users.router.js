const express = require("express");
const UserService = require("../services/user.service");
const validatorHandler = require("../middlewares/validator.handler");
 const {
   updateUserSchema,
   createUserSchema,
   getUserSchema,
 } = require("../schemas/user.schema");

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

router.get('/:id', validatorHandler(getUserSchema, "params"), async (req, res, next) => {
  try {
    const {id} = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", validatorHandler(createUserSchema, "body"), async (req, res, next) => {
  try{
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  }catch(e){
    next(e);
  }
});

router.patch('/:id', validatorHandler(getUserSchema, "params"), validatorHandler(updateUserSchema, "body"), async (req, res, next) => {
  try{
    const {id} = req.params;
    const changes = req.body;
    const user = await service.update(id, changes);
    res.json(user);
  }catch(e){
    next(e);
  }
});

router.delete('/:id', validatorHandler(getUserSchema, "params"), async (req, res, next) => {
  try{
    const {id} = req.params;
    const user = await service.delete(id);
    res.status(201).json(user);
  }catch(e){
    next(e);
  }
});

module.exports = router;
