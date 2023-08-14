const router =require("express").Router()
const { CreateReservCtrl, GetReservations, DelReservation } = require("../controllers/ReservController")


//  /api/Reserv/
router.route("/")
             .post(CreateReservCtrl)
             .get(GetReservations)
             

// //  /api/Reserv/:id
router.route("/:id")
        .delete(DelReservation)



module.exports=router