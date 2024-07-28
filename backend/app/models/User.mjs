import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    name: { type: String, required: true },
    role: { type: String, required: true },
    city: { type: String, required: false },
    institute: { type: String, required: false },
    internshipOrStudent: { type: String, required: false },
    field: { type: String, required: false },
    interestedInConsulting: { type: Boolean, required: true },
    verificationToken: String,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
