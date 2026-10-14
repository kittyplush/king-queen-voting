const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

// Feature 1: Create Account
router.route("/").post(userController.createUser);

// Feature 4 & 5: Update and Delete Account by ID
router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;