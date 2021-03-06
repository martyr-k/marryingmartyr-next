import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const codeSchema = new mongoose.Schema({
  inviteCode: {
    type: String,
    required: [true, "Please specify an invite code."],
    unique: [true, "This invite code already exists."],
    select: false,
  },
  alias: {
    type: String,
    required: [true, "Please specify an alias for the invite code."],
    unique: [true, "This alias already exists."],
  },
  email: {
    type: String,
    unique: [true, "This email address already exists, please choose another."],
  },
  identifier: {
    type: String,
  },
  attendance: {
    type: String,
    required: [true, "Please specify the attendance type."],
    enum: ["virtual", "in-person"],
  },
  invitedGuests: Array,
  confirmedGuests: Array,
  rsvp: {
    type: Boolean,
    default: false,
  },
  song: String,
  role: {
    type: String,
    enum: ["guest", "admin"],
    default: "guest",
  },
  refreshToken: String,
});

codeSchema.pre("save", async function (next) {
  if (!this.isModified("inviteCode")) return next();

  this.inviteCode = await bcrypt.hash(this.inviteCode, 12);

  return next();
});

codeSchema.methods.comparePassword = async (candidatePassword, userPassword) =>
  bcrypt.compare(candidatePassword, userPassword);

codeSchema.methods.generateRefreshToken = function () {
  const token = uuidv4();

  this.refreshToken = token;
  return token;
};

// prevents mongoose from recompiling the model
export default mongoose.models.Code || mongoose.model("Code", codeSchema);
