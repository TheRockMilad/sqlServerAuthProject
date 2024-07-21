const Joi = require("joi");

const userValidatorSchema = Joi.object({
  firstname: Joi.string().lowercase().min(3).max(15).required(), // AMIn -> amin
  lastname: Joi.string().uppercase().min(3).max(15).required(),
  username: Joi.string().min(8).max(24).required(),
  signupMethod: Joi.string().required().valid("email", "phone"),
  email: Joi.string().email().min(10).max(40).when("signupMethod", { is: "email", then: Joi.required() }),
  phone: Joi.string().pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).when("signupMethod", { is: "phone", then: Joi.required() }),
  password: Joi.string().min(8).max(24).required(),
  confirmPassword: Joi.ref("password"),
});

module.exports = { userValidatorSchema };
