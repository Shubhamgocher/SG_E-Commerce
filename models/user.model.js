import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      
    },
    password:{
        type:String,
        required:[true,"Password is required"]
        
    },
    avatar:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String
    },
  },
  { timestamps: true }
)
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10);
    next();
})
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

export const User = model("User", userSchema);
