const express_validator = require("express-validator");
const check = express_validator.check;
module.exports = new (class {
  registerValidator() {
    return [
      check("email").isEmail().withMessage("email is invalid"),
      check("name").isLength().withMessage("name is invalid"),
      check("password")
        .isStrongPassword()
        .withMessage("password is not strong"),
    ];
  }

  loginValidator() {
    return [
      check("email").isEmail().withMessage("email is invalid"),

      check("password").isStrongPassword().withMessage("password is invalid"),
    ];
  }
})();
