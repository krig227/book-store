const TokenBlacklist = require("../model/tokenBlacklist");

async function logout(token) {
  try {
    // Check if the token is already in the blacklist
    const isTokenBlacklisted = await TokenBlacklist.findOne({ token });

    if (isTokenBlacklisted) {
      return { success: false, message: "Token already blacklisted" };
    }

    // If not, add the token to the blacklist
    const tokenToBlacklist = new TokenBlacklist({ token });
    await tokenToBlacklist.save();

    return { success: true, message: "Logout successful" };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Internal Server Error" };
  }
}

module.exports = {
  logout,
};
