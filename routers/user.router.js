const router = require('express').Router();
const userController = require("../controller/user.controller");

router.post("/registration",userController.register);

// jaise hi registration wala endpoint hit hoga usercontroller se register function call hoga

module.exports = router;