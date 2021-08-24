const Joi = require('joi')

const schemaCreateContact = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().optional(),
  phone: Joi.string().optional()
})

const schemaUpdateContact = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .optional('name', 'email'),
  phone: Joi.string().optional()
})

const validate = async (schema, obj, next) => {
  try {
    await schema.validateAsync(obj)
    next()
  } catch (err) {
    next({
      status: 400,
      message: err.message
    })
  }
}

module.exports = {
  validationCreateContact: (req, res, next) => {
    return validate(schemaCreateContact, req.body, next)
  },
  validationUpdateContact: (req, res, next) => {
    return validate(schemaUpdateContact, req.body, next)
  },
}
