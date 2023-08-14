const mongoose =require("mongoose")
const joi=require("joi")

const ReservSchema = new mongoose.Schema(
    {
guest:{
        type:Number,
        required: true,
        minlength: 1,
      },
      time:{
        type:String,
        required: true,
      },
      notice:{
        type: String,
        required: true,
        trim: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      userID:{
        type:String,
        required: true,
      }
      },{timestamps: true,}
  );
  
const Reserv = mongoose.model("Reserv", ReservSchema);

function validReserv(obj){
    const schema=joi.object({
        guest:joi.number().min(1).required(),
        time:joi.string().required(),
        notice: joi.string().trim().required(),
        userID: joi.string().trim().required(),
     })
     return schema.validate(obj)
}

function validReservUPdate(obj){
  const schema=joi.object({
      guest:joi.number().min(1),
      time:joi.number(),
      notice: joi.string().trim(),
      
   })
   return schema.validate(obj)
}

module.exports={
Reserv,
validReserv,
validReservUPdate
}

