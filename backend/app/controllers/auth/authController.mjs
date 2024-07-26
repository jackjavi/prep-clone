import crypto from "crypto";
import User from "../../models/User.mjs";

const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const user = new User({
      email,
      password,
      name,
      profilePicture: profilePictureUrl,
      verificationToken,
    });
    await user.save();

    res.status(200).json({
      user,
      message: "Registration successful, please verify your email.",
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { register };
