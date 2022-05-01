const Joi = require('joi');
//Data object transfer

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const img  = Joi.string().uri();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: img.required()
});


const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: img
});

const getProductSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema
}