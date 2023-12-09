const { validationResult } = require("express-validator");
const userService = require("../services/userService");

async function registerUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { email, password, username } = req.body;
    const user = await userService.registerUser(email, password, username);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof userService.UserNotFoundError) {
      return res.status(error.statusCode).json({ error: error.message });
    } else if (error instanceof userService.passwordError) {
      return res.status(error.statusCode).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

async function getProfile(req, res) {
  try {
    const user = await userService.getUserById(req.user.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile" });
  }
}

async function updateProfile(req, res) {
  try {
    const updatedUser = await userService.updateUser(req.user.userId, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user profile" });
  }
}

async function addAddress(req, res) {
  try {
    const updatedUser = await userService.addAddress(
      req.user.userId,
      req.body.address
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error adding address" });
  }
}

// async function getOrders(req, res) {
//   try {
//     const orders = await userService.getUserOrders(req.user.userId);
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user orders" });
//   }
// }

async function changePassword(req, res) {
  try {
    const success = await userService.changePassword(
      req.user.userId,
      req.body.password
    );
    if (success) {
      res.json({ message: "Password changed successfully" });
    } else {
      res.status(400).json({ message: "Password change failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error changing password" });
  }
}

async function addToWishlist(req, res) {
  const { bookId } = req.body;
  const userId = req.user.userId; // Assuming you have user information in req.user

  try {
    const message = await userService.addToWishlist(userId, bookId);
    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getWishlist(req, res) {
  const userId = req.user.userId; // Assuming you have user information in req.user

  try {
    const wishlist = await userService.getWishlist(userId);
    return res.status(200).json(wishlist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser,
  changePassword,
  //   getOrders,
  addAddress,
  updateProfile,
  getProfile,
  addToWishlist,
  getWishlist,
};
