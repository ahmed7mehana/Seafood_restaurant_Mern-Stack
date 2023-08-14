
const mongoose =require("mongoose")
const joi=require("joi")


const MealSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 200,
      },
      description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
      },
      image: {
        type: Object,
        default: {
          url: "",
          publicId: null,
        },
      },
      category: {
        type: String,
        required: true,
      },
      price:{
        type:Number,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 200,
      }
      },{timestamps: true,}
  );
  

  const Meal = mongoose.model("Meal", MealSchema);
  
  

function validMeal(obj){
    const schema=joi.object({
        title:joi.string().trim().min(2).max(100).required(),
        description:joi.string().trim().min(2).required(),
        category: joi.string().trim().required(),
        price:joi.number().min(1).required(),
     })
     return schema.validate(obj)
}

function validUpdateMeal(obj){
    const schema=joi.object({
        title:joi.string().trim().min(2).max(100),
        description:joi.string().trim().min(2),
        category: joi.string().trim(),
        price:joi.number().min(1),
     })
     return schema.validate(obj)
}




module.exports={
Meal,
validMeal,
validUpdateMeal
}

