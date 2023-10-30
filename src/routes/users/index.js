//this file would have all of the routers of authrization
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get(
  "/",
  controller.showUsers.bind(controller) //we don t call it bc it is a callback func
);
router.delete(
  "/:id",
  controller.deleteUser.bind(controller) //we don t call it bc it is a callback func
);
module.exports = router;
