const Joi = require('joi');

const schema = Joi.object({
    content: Joi.string()
        .min(10)
        .max(255)
        .required(),

    thumbnail: Joi.string()
        .optional(),
});

module.exports = schema;
