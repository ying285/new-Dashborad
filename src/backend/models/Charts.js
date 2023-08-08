import mongoose from "mongoose";

const { Schema } = mongoose;

const chartsSchema = new Schema(
  {
    name:{
      type:String,
      required:true,
    },
    ActiveUser: {
      type: String,
      required: true,
    }
    
  },
  { timestamps: true }
);

export default mongoose.models.Charts || mongoose.model("Charts", chartsSchema);