const { getElementByEmail } = require("./users.js");
const jwt = require("jsonwebtoken");

async function testLogin(req, res) {
  const { email, password } = req.body;
  const users = await getElementByEmail(email);
  try {
    if (users && email === users.email && password === users.password) {
      const { _id, email } = users;
      const accesToken = jwt.sign(
        {
          _id,
          email,
        },
        process.env.JWT_SEC,
        { expiresIn: "5m" }
      );
      res.cookie("userData", JSON.stringify(users), {
        maxAge: 60 * 1000,
      });

      res.status(200).json({ status: "success", token: accesToken });
    } else {
      res.status(200).json({
        status: "error",
        message: "Usuario o contraseña incorrectos",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = { testLogin };
