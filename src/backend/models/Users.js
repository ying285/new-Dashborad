import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
     id:{
       type:String,
       required:true,
       
     },
    username: {
      type: String,
      required: true,
    },
   fullname: {
       type: String,
       required: true,
     },
      avatar: {
        type: String,
        required: true,
      },
     email:{
         type:String,
         required:true,
     },
     phone:{
       type:String,
       required:true,
   },
     status:{
         type:String,
         required:true,
     },
     transaction:{
         type:String,
         required:true,
     },
   
    
  },
  { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", usersSchema);