import connectDB from "../../../utils/Database config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../models/registerModel";
import Cookies from "cookies";

connectDB();

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please fill all the required fields",
      });
    }

    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export default register;
