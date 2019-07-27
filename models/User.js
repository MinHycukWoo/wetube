import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"

const UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    avatarUrl: String,
    gacebookId: Number,
    githubId: Number
});

UserSchema.plugin(passportLocalMongoose,{usernameField:"eamil"});

const model = mongoose.model("User",UserSchema);

export default model;