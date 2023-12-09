const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../config/.env") });

class UserNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotFoundError";
    this.statusCode = 404;
  }
}

class passwordError extends Error {
  constructor(message) {
    super(message);
    this.name = "Invalid password";
    this.statusCode = 404;
  }
}

async function registerUser(email, password, username) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword, username });
  return user.save();
}

async function loginUser(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new UserNotFoundError("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new passwordError("Invalid password");
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30m",
  });
  return token;
}

async function getUserById(userId) {
  return User.findById(userId).select("-password  -_id");
}

async function updateUser(userId, data) {
  return User.findByIdAndUpdate(userId, data, { new: true }).select(
    "-password"
  );
}

async function addAddress(userId, address) {
  const user = await User.findById(userId);
  user.address.push(address);
  return user.save();
}

// async function getUserOrders(userId) {
//   const user = await User.findById(userId).populate("orders");
//   return user.orders;
// }

async function changePassword(userId, newPassword) {
  const user = await User.findById(userId);
  const passwordMatch = await bcrypt.compare(newPassword, user.password);
  if (passwordMatch) {
    return false; // Password is the same as the current one
  }

  // Hash the new password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
  user.password = hashedPassword;
  await user.save();
  return true;
}

const addToWishlist = async (userId, bookId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Check if the bookId is already in the wishlist
    if (user.wishlist.includes(bookId)) {
      throw new Error("Book is already in the wishlist");
    }

    user.wishlist.push(bookId);
    await user.save();

    return "Book added to wishlist";
  } catch (error) {
    throw new Error("Failed to add book to wishlist");
  }
};

const getWishlist = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    return user.wishlist;
  } catch (error) {
    throw new Error("Failed to get wishlist");
  }
};

module.exports = {
  registerUser,
  loginUser,
  UserNotFoundError,
  passwordError,
  getUserById,
  updateUser,
  addAddress,
  //   getUserOrders,
  changePassword,
  addToWishlist,
  getWishlist,
};
