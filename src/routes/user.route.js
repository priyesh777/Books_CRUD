const express = require("express");
const { register, login } = require("../controller/user.controller");
const router = express.Router();

const userRequest = (_req, _res, next) => {
  console.log("Middleware: user....");
  next();
};

router.post("/register", userRequest, register);
router.post("/login", userRequest, login);

module.exports = router;
