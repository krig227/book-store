const authService = require("../services/authServices");

async function logout(req, res) {
  const token = req.header("Authorization");

  const logoutResult = await authService.logout(token);

  if (logoutResult.success) {
    res.status(200).json({ message: logoutResult.message });
  } else {
    res.status(401).json({ error: logoutResult.message });
  }
}

module.exports = {
  logout,
};
