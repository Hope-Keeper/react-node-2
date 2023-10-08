//this file will have all of functions for authrization
const controller = require("./../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = new (class extends controller {
  async register(req, res) {
    let user = await this.User.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res,
        code: 400,
        message: "this user already registerd",
      });
    }

    //const {email,name,password}=req.body;
    // user= new this.User({email,name,password})
    user = new this.User(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    this.response({
      res,
      message: "the user succesfully registerd",
      data: _.pick(user, ["_id", "name", "email"]),
    });

    // res.send("register");
  }

  async login(req, res) {
    let user = await this.User.findOne({ email: req.body.email });

    if (!user) {
      return this.response({
        res,
        code: 400,
        message: "invalid email or password",
      });
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return this.response({
        res,
        code: 400,
        message: "invalid email or password",
      });
    }
    //creating webtoken
    const token = jwt.sign({ _id: user.id }, config.get("jwt_key"));
    this.response({ res, message: "succesfully logged in", data: { token } });
  }
})();
