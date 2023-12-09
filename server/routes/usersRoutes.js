const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/usersController");
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
  ],
  userController.registerUser
);

router.post("/login", userController.loginUser);
router.post("/logout", authController.logout);
router.get("/profile", verifyToken, userController.getProfile);
router.post("/profile", verifyToken, userController.updateProfile);
router.patch("/address", verifyToken, userController.addAddress);
// router.get('/orders', verifyToken, userController.getOrders);
router.patch("/password", verifyToken, userController.changePassword);
router.post("/wishlist/add", verifyToken, userController.addToWishlist);
router.get("/wishlist", verifyToken, userController.getWishlist);

module.exports = router;
