const Joi = require('joi')

const schemaCreateContact = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30),
  email: Joi.string().optional(),
  phone: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$')).optional(),
  favorite: Joi.boolean()
})

const schemaUpdateContact = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .optional('name', 'email'),
  phone: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$')).optional(),
  favorite: Joi.boolean().optional()
})

const schemaUpdateFavorite = Joi.object({
  favorite: Joi.boolean()
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
  validationUpdateFavoriteInContact: (req, res, next) => {
    return validate(schemaUpdateFavorite, req.body, next)
  }
}
