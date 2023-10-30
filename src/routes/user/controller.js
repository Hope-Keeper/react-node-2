//this file will have all of functions for authrization
const controller = require("../controller");
const _ = require("lodash");

module.exports = new (class extends controller {
  async dashboard(req, res) {
    this.response({ res, data: "dashboard 💚💛🤍" });
  }

  async me(req, res) {
    this.response({ res, data: _.pick(req.user, ["name", "email"]) });
  }
})();
