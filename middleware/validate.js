const schema = require("../src/auth/validation");

const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const { error } = schema.validate(req.body, {
        abortEarly: false
      });
      if (error) {
        const errorObject = {}
        for (const details of error.details) {
            errorObject[details.context.key]=details.message.replace(/"/g," ")
        }
        return res.status(400).json(errorObject);
      }
      next();
    } catch (error) {
      console.error("Unexpected error during validation", error);
      return res.status(500).json({ message: "An unexpected error occurred" });
    }
  };
};

module.exports = validate;
