const jwt = require("jsonwebtoken");
// Import your secret key
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../config/.env") });
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const { checkIfTokenIsBlacklisted } = require("./tokenBlacklist");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization; // Assuming the token is sent in the Authorization header

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const tokenParts = token.split(" ");
  const actualToken = tokenParts[1];

  if (await checkIfTokenIsBlacklisted(token)) {
    return res.status(401).json({ error: "Token is blacklisted" });
  }

  try {
    const decoded = jwt.verify(actualToken, SECRET_KEY);
    req.user = decoded; // Attach user information to the request
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

//app.get('/protectedRoute', verifyToken, (req, res) => {
//   res.json({ message: 'You are authorized as ' + req.user.username });
//});

module.exports = verifyToken;
