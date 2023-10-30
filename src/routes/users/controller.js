//this file will have all of functions for authrization
const controller = require("../controller");
const _ = require("lodash");

module.exports = new (class extends controller {
  async showUsers(req, res) {
    let users = await this.User.find();

    this.response({
      res,
      message: "the user succesfully registerd",
      data: users,
    });
    // res.send(users);
  }

  async deleteUser(req, res) {
    const user = await this.User.findByIdAndRemove(req.params.id);

    if (!user)
      return res
        .status(404)
        .json({ data: null, message: "the user with the given wasn t found" });

    this.response({
      res,
      message: "ok...",
      data: user,
    });
  }
})();
