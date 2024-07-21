const joi = require("joi");

const registerValidation = joi.object({
  Name: joi.string().lowercase().required(),
  Family: joi.string().lowercase().required(),
  Email: joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"] },}).required(),
  Password: joi.string().min(8).required(),
  IsAdmin: joi.boolean().default(false),
  Age: joi.number().integer().min(18).max(100),
});

const loginValidation = joi.object({
  Email: joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"] },}).required(),
  Password: joi.string().min(8).required()
});

module.exports = {registerValidation,loginValidation}



// const Joi = require("joi");

// const userValidatorSchema = Joi.object({
//   firstname: Joi.string().lowercase().min(3).max(15).required(), // AMIn -> amin
//   lastname: Joi.string().uppercase().min(3).max(15).required(),
//   username: Joi.string().min(8).max(24).required(),
//   signupMethod: Joi.string().required().valid("email", "phone"),
//   email: Joi.string().email().min(10).max(40).when("signupMethod", { is: "email", then: Joi.required() }),
//   phone: Joi.string().pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).when("signupMethod", { is: "phone", then: Joi.required() }),
//   password: Joi.string().min(8).max(24).required(),
//   confirmPassword: Joi.ref("password"),
// });

// module.exports = { userValidatorSchema };
