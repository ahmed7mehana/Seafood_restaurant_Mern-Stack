const { CreateMealCtrl, UpdateMealCtrl, UpdateMealimageCtrl, DelMealCtrl, GetAllMealsCtrl, GetMealsCountCtrl } = require("../controllers/mealController")
const { photoUpload } = require("../middleware/photoUpload")
const {TAdmin } = require("../middleware/verifyToken")

const router =require("express").Router()




//  /api/meal
router.route("/")
        .post(TAdmin,photoUpload.single("image"),CreateMealCtrl)
        .get(GetAllMealsCtrl)
        


//  /api/meal/count
router.route("/count").get(TAdmin,GetMealsCountCtrl)


//  /api/meal/64b25a89b569a791c5e6485d
router.route("/:id")
           .delete(TAdmin,DelMealCtrl)



// text
// /api/meal/updatemeal/64b25a89b569a791c5e6485d
router.route("/updateMeal/:id").put(TAdmin,UpdateMealCtrl)

// image
// /api/meal/updateimage/64b25a89b569a791c5e6485d
router.route("/updateimage/:id").put(TAdmin,photoUpload.single("image"),UpdateMealimageCtrl)






module.exports=router