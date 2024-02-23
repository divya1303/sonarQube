import mongoose, { Schema } from "mongoose";
import { IProfile } from "../interface/profile.interface";

const ProfileSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const ProfileModel = mongoose.model<IProfile>("Profile", ProfileSchema);

export default ProfileModel;
