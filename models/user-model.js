import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, default: "" },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    avatar: { type: String, default: "" },
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
