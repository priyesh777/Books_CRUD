const User = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user already exists by email
  const user = await User.findOne({}).where("email").equals(email);
  console.log("User:", user);

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  // Create new user
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password", hashedPassword);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const createUser = await User.create(newUser);
    res.json(createUser);
  } catch (error) {
    console.log("Catched an error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  // Check if user already exists by email
  const userExists = await User.findOne({}).where("email").equals(email);
  console.log("User:", userExists);

  //if user does not exist
  if (!userExists) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  //compare password
  const passwordMatch = await bcrypt.compare(password, userExists.password);
  if (!passwordMatch) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  //if user exists and password matches, assign json web token
  const token = jwt.sign({ id: userExists.id }, process.env.SECRET_KEY, {
    expiresIn: "1h", //expires in 1 hour
  });
  //set cookie in response
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.json({
    name: userExists.name,
    token,
  });
};

module.exports = { register, login };
