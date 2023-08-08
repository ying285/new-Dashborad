import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
     id:{
       type:String,
       required:true,
       
     },
    name: {
      type: String,
      required: true,
    },
  
      image: {
        type: String,
        required: true,
      },
      sales: {
        type: String,
        required: true,
      },
     stock:{
         type:String,
         required:true,
     },
     price:{
       type:String,
       required:true,
   }
    
   
    
  },
  { timestamps: true }
);

export default mongoose.models.Products || mongoose.model("Products", productsSchema);