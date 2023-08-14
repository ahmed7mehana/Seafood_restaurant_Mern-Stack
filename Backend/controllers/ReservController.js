const expressAsyncHandler = require("express-async-handler");
const { validReserv, Reserv, validReservUPdate } = require("../model/Reserv");

/**
 *@description  Create
 * @route  /api/Reserv/
 * @method post
 * @access pub
 */
module.exports.CreateReservCtrl=expressAsyncHandler(async(req,res)=>{
console.log(req.body)
    const {error} = validReserv(req.body)
if(error){return res.status(400).json({message:error.details[0].message})}
//create Reserv
const NReserv= await Reserv.create({
    guest:req.body.guest,
    time:req.body.time,
    notice:req.body.notice,
    userID:req.body.userID,
})
 //sent res
res.status(201).json(NReserv)
})

/**
 *@description  get all reservations
 * @route  /api/Reserv/
 * @method get
 * @access private
 */
 module.exports.GetReservations=expressAsyncHandler(async(req,res)=>{
    // RVS = reservations
    RVS = await Reserv.find().sort({createdAt:-1 })
    res.status(200).json(RVS)
        })

/**
 *@description  delete RVS
 * @route  /api/Reserv/
 * @method delete
 * @access private
 */
 module.exports.DelReservation=expressAsyncHandler(async(req,res)=>{
    const Rvs =await Reserv.findById(req.params.id)

        if(!Rvs){ return res.status(400).json({message:"dont found any reservations"})
    }else{
        await Reserv.findByIdAndDelete(Rvs)
    res.status(200).json({message:"Reservation has been deleted"})
    }
    })



