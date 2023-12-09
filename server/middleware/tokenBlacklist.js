const TokenBlacklist = require("../model/tokenBlacklist");

const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization");

  // Check if the token is blacklisted
  const isTokenBlacklisted = await TokenBlacklist.findOne({ token });

  if (isTokenBlacklisted) {
    return res
      .status(401)
      .json({ error: "Token is blacklisted. Please log in again." });
  }
  next();
};

const checkIfTokenIsBlacklisted = async (token) => {
  const blacklistedToken = await TokenBlacklist.findOne({ token: token });
  return !!blacklistedToken;
};

module.exports = {
  authenticateUser,
  checkIfTokenIsBlacklisted,
};
