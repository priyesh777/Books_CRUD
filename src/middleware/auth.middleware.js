const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  //get the token from the cookies in the request{token: "token"}
  //const token = req.cookies["token"];
  const token = req.headers.authorization.split(" ")[1]; // Bearer token
  console.log("Token:", token);

  if (!token) {
    return res.status(401).send("Access denied!");
  }

  //verify the token
  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

  if (!verifyToken) {
    return res.status(401).send("Access denied");
  }
  next();
};

module.exports = authMiddleware;
