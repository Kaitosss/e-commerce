import User from "../models/user.model.js";
import { setCookies } from "../utils/cookie.util.js";
import { generateToken } from "../utils/generateToken.util.js";
import { storeRefreshToken } from "../utils/redis.util.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    const { accessToken, refreshToken } = generateToken(user._id);
    await storeRefreshToken(user._id, refreshToken);

    setCookies(res, accessToken, refreshToken);

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = (req, res) => {
  try {
  } catch (error) {}
};

export const logout = (req, res) => {
  try {
  } catch (error) {}
};
